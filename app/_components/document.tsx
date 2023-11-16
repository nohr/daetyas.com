"use client"

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
                animate={{ height: "calc(50vh - 2.25rem)" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex h-[calc(50vh_-_2.25rem)] border-b  text-base">
                {block._type === "project" &&
                    <>
                        <div className="relative border-r w-2/3">
                            <Image
                                src={urlFor((block as ProjectType).image).url()}
                                alt={block.title}
                                sizes="100vw, (min-width: 1024px) 33vw, 50vw"
                                fill
                                className=" absolute object-contain"
                            />
                        </div>
                        <div className="p-2 w-1/3 flex flex-col justify-between">
                            <h3 className=" text-2xl">{block.title}</h3>
                            <div className="desc h-2/3 overflow-y-scroll">
                                <PortableText value={block.text} />
                            </div>
                        </div>
                    </>
                }
                {
                    block._type !== "project" &&
                    <>
                        <div className="w-full flex justify-start flex-row">
                            <h3 className=" text-2xl border-r w-1/3">{block.title}</h3>
                            <div className="desc p-2 max-w-prose overflow-y-scroll">
                                <PortableText value={block.text} />
                            </div>
                        </div>
                    </>
                }
            </motion.section>
        </AnimatePresence>
    )
}
