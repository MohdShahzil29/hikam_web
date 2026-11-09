import Image from "next/image";

// An Android phone around a real app screenshot: thin bezel, punch-hole camera, power and volume keys.
// `front` gives it the deep shadow of the phone standing in front of the others.
export default function AndroidPhone({
  src,
  alt,
  sizes,
  priority = false,
  front = true,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  front?: boolean;
}) {
  return (
    <div
      dir="ltr"
      className={`relative rounded-[2.4rem] bg-[#1c2326] p-[7px] ring-1 ring-black/5 transition-shadow duration-700 ${
        front ? "shadow-[0_30px_60px_-12px_rgba(15,59,71,0.45)]" : "shadow-xl shadow-teal/15"
      }`}
    >
      <span className="absolute top-24 -right-[3px] h-10 w-[3px] rounded-r-sm bg-[#1c2326]" />
      <span className="absolute top-40 -right-[3px] h-16 w-[3px] rounded-r-sm bg-[#1c2326]" />
      <div className="relative aspect-[9/20] overflow-hidden rounded-[2rem] bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" draggable={false} />
        <span className="absolute top-2 left-1/2 size-[11px] -translate-x-1/2 rounded-full bg-black ring-2 ring-black/20" />
      </div>
    </div>
  );
}
