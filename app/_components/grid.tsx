"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "./url";
import { BlockType, ProjectType, WordType } from "../app";
import { PortableText } from "@portabletext/react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { act } from "react-dom/test-utils";

export default function Grid({
  children,
  blocks,
}: {
    children: React.ReactNode;
    blocks: BlockType[];
  }) {
  const pathname = usePathname();
  const randomBlocks = [...blocks].sort(() => Math.random() - 0.5);

  return (
    <>
      {pathname.includes("info") || pathname.includes("studio") ? (
        children
      ) : (
        <div>
          {children}
          <div className="md:columns-[3_200px] columns-[1_200px] h-full w-full ">
            {randomBlocks.map(
              (block) =>
                (pathname.replace("/", "")
                  ? pathname.includes(block._type)
                  : !block._type.includes("exhibition")) && <Block key={block._id} data={block} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Block({ data }: { data: ProjectType | WordType }) {
  const blockRef = useRef(null!);
  const isInView = useInView(blockRef, {
    once: false,
  });
  const randomHeight = `${Math.floor(Math.random() * 200) + 250}px`;
  const pathname = usePathname();
  const active = pathname.includes(data.slug.current);
  
  return (
    <Link
      ref={blockRef}
      className={`w-full inline-flex items-center justify-center relative overflow-hidden h-auto aspect-square duration-300 ease-in-out ${
        data._type !== "project" && " border !inline-block"
      } ${active ? "pointer-events-none border" : ""}`}
      href={`/${data._type}s/${data.slug.current}`}
      style={{ height: isInView ? randomHeight : randomHeight }}
    >
      {data._type === "project" && (
        <>
          <Image
            src={data.image ? urlFor(data.image).url() : ""}
            alt={data.title || ""}
            sizes="100vw, (min-width: 1024px) 33vw, 50vw"
            fill
            suppressHydrationWarning
            blurDataURL={data.image ? urlFor(data.image).blur(1).url() : ""}
            className={`absolute object-cover hover:opacity-25 z-10 ${active ? "opacity-10" : ""}`}
          />
          <h2 className=" p-2 text-3xl text-current">{data.title}</h2>
        </>
      )}

      {data._type !== "project" && (
        <div
          onScroll={(e) => { e.stopPropagation(); e.preventDefault(); }}
          onWheel={(e) => { e.stopPropagation(); e.preventDefault(); }}
          className={`words animate-autoscroll hover:opacity-25 overflow-y-scroll [&_>_p]:pointer-events-none text-4xl ${active ? "opacity-10": ""}`}>
          <PortableText value={data.text} />
        </div>
      )}
    </Link>
  );
}
