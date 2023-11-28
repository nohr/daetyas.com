import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { BlockType, InfoType } from "../app";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../_components/url";

export const metadata: Metadata = {
  title: "dae tyas | info",
  description: "personal website of dae tyas",
};

export default async function InfoPage() {
  const info = await client.fetch<InfoType>(`*[_type == "info"][0]`);

  return (
    <div className="flex items-center justify-evenly pt-4 text-base max-md:flex-col">
      <div className="relative h-96 w-72 border">
        {info.image && (
          <Image
            src={urlFor(info.image).url()}
            alt={"me"}
            sizes="100vw, (min-width: 1024px) 33vw, 50vw"
            fill
            suppressHydrationWarning
            className={`absolute z-10 object-cover`}
          />
        )}
      </div>
      <div className="flex max-w-prose flex-col gap-1">
        <PortableText value={info.text} />
      </div>
    </div>
  );
}
