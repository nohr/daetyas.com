"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "./url";
import { ProjectType, WordType } from "../app";
import { PortableText } from "@portabletext/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Block({ data }: { data: ProjectType | WordType }) {
  const blockRef = useRef<HTMLDivElement>(null!);
  const [mod, setMod] = useState([200, 250]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMod([100, 60]);
      } else {
        setMod([200, 250]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const randomHeight = useCallback(
    () => `${Math.floor(Math.random() * mod[0]) + mod[1]}px`,
    [mod],
  );
  const pathname = usePathname();
  const active = pathname.includes(data.slug.current);

  return (
    <motion.div
      suppressHydrationWarning
      whileInView={{ height: randomHeight() }}
      viewport={{
        once: true,
      }}
      ref={blockRef}
      className={`relative inline-flex aspect-square h-auto w-full items-center justify-center overflow-hidden duration-300 ease-in-out ${
        data._type !== "project" && " !inline-block border"
      } ${active ? "pointer-events-none border" : ""}`}
    >
      <Link
        className="relative contents"
        href={`/${data._type}s/${data.slug.current}`}
      >
        {data._type === "project" && (
          <>
            {data.image && data.image[0] ? (
              <Image
                src={urlFor(data.image[0]).url()}
                alt={data.title || ""}
                sizes="33vw, (min-width: 1024px) 33vw, 50vw"
                fill
                priority
                suppressHydrationWarning
                blurDataURL={urlFor(data.image[0]).blur(1).url()}
                className={`absolute z-10 object-cover hover:opacity-25 ${
                  active ? "opacity-10" : ""
                }`}
              />
            ) : null}
            <h2
              suppressHydrationWarning
              className=" text-current p-2 text-lg md:text-3xl"
            >
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
            className={`words animate-autoscroll overflow-y-scroll text-lg hover:opacity-25 md:text-4xl [&_>_*]:pointer-events-none ${
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
