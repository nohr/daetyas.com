"use client";
import { BlockType } from "../app";
import { usePathname } from "next/navigation";
import Block from "./block";

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
