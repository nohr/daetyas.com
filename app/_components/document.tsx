"use client";

import { PortableText } from "@portabletext/react";
import { BlockType, ProjectType } from "../app";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "./url";

export default function Document({ block }: { block: BlockType }) {
  return (
    <AnimatePresence>
      <motion.section
        key={block._id}
        initial={{ height: 0 }}
        animate={{ height: "calc(66.67vh - 2.25rem)" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex h-[calc(50vh)] flex-col border border-t-0 text-base md:h-[calc(50vh_-_2.25rem)] md:flex-row  md:border-x-0"
      >
        {block._type === "project" && (
          <>
            <div className=" block h-full w-full overflow-x-auto overflow-y-hidden whitespace-nowrap md:w-2/3 md:border-r">
              {block.image &&
                block.image.map((image, index) => (
                  <div
                    className="relative inline-block h-full w-full"
                    key={index}
                  >
                    <Image
                      src={urlFor(image).url()}
                      alt={block.title + " " + index}
                      sizes="100vw, (min-width: 1024px) 33vw, 50vw"
                      fill
                      className=" pointer-events-none absolute select-none object-contain"
                    />
                  </div>
                ))}
            </div>
            <div className="flex w-full flex-col justify-between px-2 md:w-1/3">
              <h3 className=" text-2xl">{block.title}</h3>
              <div className="desc h-2/3 overflow-y-scroll">
                <PortableText value={block.text} />
              </div>
            </div>
          </>
        )}
        {block._type !== "project" && (
          <>
            <div className="flex w-full flex-row justify-start">
              <h3 className=" w-1/3 border-r text-2xl">{block.title}</h3>
              <div className={`desc overflow-y-scroll p-2 md:w-2/3`}>
                <PortableText value={block.text} />
              </div>
            </div>
          </>
        )}
      </motion.section>
    </AnimatePresence>
  );
}
