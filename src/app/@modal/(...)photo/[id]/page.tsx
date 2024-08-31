"use client";
import { photos } from "../../../data";
import Image from "next/image";

export default function PhotoModal({ params: { id } }: any) {
  const photo = photos.find((p) => p.id === id);
  return (
    <div className="flex h-[250px] justify-center items-center fixed bottom-0 bg-slate-300 w-full">
      <Image
        src={photo?.src ?? ""}
        width={300}
        height={200}
        objectFit="cover"
        alt=""
      />
    </div>
  );
}
