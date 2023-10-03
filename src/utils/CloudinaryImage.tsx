import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";


export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  },
});

type CloudinaryImageProps = {
  publicId: string;
  alt?: string;
  className?: string;
  width?: number;
}

export const CloudinaryImage = ({ publicId, alt, className }: CloudinaryImageProps) => {

  const imageConfig = cld.image(publicId)
                          .quality("auto")

  return (
    <AdvancedImage
      cldImg={imageConfig}
      className={className}
      alt={alt}
    />
  );
};
