"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "./url";
import { ProjectType, WordType } from "../app";
import { PortableText } from "@portabletext/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";

export default function Block({ data }: { data: ProjectType | WordType }) {
  const blockRef = useRef<HTMLDivElement>(null!);
  const randomHeight = useCallback(
    () => `${Math.floor(Math.random() * 200) + 250}px`,
    [],
  );
  const pathname = usePathname();
  const active = pathname.includes(data.slug.current);

  return (
    <motion.div
      whileInView={{ height: randomHeight() }}
      viewport={{
        once: true,
      }}
      ref={blockRef}
      className={`relative inline-flex aspect-square h-auto w-full items-center justify-center overflow-hidden duration-300 ease-in-out ${
        data._type !== "project" && " !inline-block border"
      } ${active ? "pointer-events-none border" : ""}`}
    >
      <Link className="contents" href={`/${data._type}s/${data.slug.current}`}>
        {data._type === "project" && (
          <>
            {data.image[0] ? (
              <Image
                src={urlFor(data.image[0]).url()}
                alt={data.title || ""}
                sizes="100vw, (min-width: 1024px) 33vw, 50vw"
                fill
                suppressHydrationWarning
                blurDataURL={urlFor(data.image[0]).blur(1).url()}
                className={`absolute z-10 object-cover hover:opacity-25 ${
                  active ? "opacity-10" : ""
                }`}
              />
            ) : null}
            <h2 suppressHydrationWarning className=" text-current p-2 text-3xl">
              {data.title}
            </h2>
          </>
        )}

        {data._type !== "project" && (
          <div
            onScroll={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            onWheel={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            className={`words animate-autoscroll overflow-y-scroll text-4xl hover:opacity-25 [&_>_p]:pointer-events-none ${
              active ? "opacity-10" : ""
            }`}
          >
            <PortableText value={data.text} />
          </div>
        )}
      </Link>
    </motion.div>
  );
}
