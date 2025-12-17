import Image from 'next/image';

interface ImageExampleProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function ImageExample({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
}: ImageExampleProps) {
  return (
    <figure className="my-6">
      <div className="border border-border rounded-lg overflow-hidden bg-muted/30">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-muted-foreground text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
