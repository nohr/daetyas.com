"use client";

import { BlockType } from "../app";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Block = dynamic(() => import("./block"), { ssr: false });

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
      {pathname.includes("info") ||
      pathname.includes("studio") ||
      pathname.includes("words/") ? (
        children
      ) : (
        <div>
          {children}
          <div className="h-fit w-full columns-[3_100px] md:columns-[3_200px] ">
            {randomBlocks.map(
              (block) =>
                (pathname.replace("/", "")
                  ? pathname.includes(block._type)
                  : !block._type.includes("exhibition")) && (
                  <Block key={block._id} data={block} />
                ),
            )}
          </div>
        </div>
      )}
    </>
  );
}
