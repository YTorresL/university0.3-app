import Image from "next/image"

export default function ImageWidth({ src }) {
  return (
    <div>
      <div className="sm:w-96 w-full h-60">
        <Image
          src={src}
          alt=""
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
