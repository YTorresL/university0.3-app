import Image from "next/image"

export default function ImageWidth({ src }) {
  return (
    <div>
      <div className="lg:w-[710px] sm:h-96 w-full h-60">
        <Image
          src={src}
          alt="Estudia en Rusia"
          width={710}
          height={384}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
