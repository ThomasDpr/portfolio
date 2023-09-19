import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  },
});

interface CloudinaryImageProps {
  publicId: string;
  alt?: string;
  className?: string;
}

export const CloudinaryImage = ({ publicId, alt, className }: CloudinaryImageProps) => {
  return (
    <AdvancedImage
      cldImg={cld.image(publicId)}
      className={className}
      alt={alt}
    />
  );
};
