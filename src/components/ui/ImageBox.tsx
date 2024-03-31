import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 1250,
  height = 550,
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div
      className={`w-full inset-0 xl:h-[550px] max-w-screen-xl mx-auto relative overflow-clip rounded-[3px] bg-gray-50 ${classesWrapper}`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Image
          className="absolute w-full  object-cover "
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
        />
      )}
    </div>
  )
}