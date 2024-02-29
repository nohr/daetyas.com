import "./globals.css";
import Nav from "./_components/nav";
import Footer from "./_components/footer";
import Grid from "./_components/grid";
import { BlockType } from "./app";
import { client } from "@/sanity/lib/client";
import { unstable_noStore } from "next/cache";

// export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  unstable_noStore();
  const blocks = await client.fetch<BlockType[]>(
    `*[_type == "project" || _type == "word" || _type == "exhibition"]`,
  );

  return (
    <html lang="en">
      <body className="flex h-[100dvh] flex-col overscroll-y-none bg-slate text-gray md:px-9">
        <Nav />
        <main className="order-2 flex h-full flex-col overflow-y-scroll text-[0px] ">
          <Grid blocks={blocks}>{children}</Grid>
        </main>
        <Footer />
      </body>
    </html>
  );
}
