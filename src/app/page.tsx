"use client";
import Link from "next/link";
import { photos } from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap">
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/photo/${id}`}>
          <Image width={200} height={200} objectFit="cover" src={src} alt="" />
        </Link>
      ))}
    </main>
  );
}
