"use client";
import Image from "next/image";
import { photos } from "../../data";

export default function PhotoPage({ params: { id } }: any) {
  const photo = photos.find((p) => p.id === id);

  return (
    <Image
      src={photo?.src ?? ""}
      width={300}
      height={200}
      objectFit="cover"
      alt=""
    />
  );
}
