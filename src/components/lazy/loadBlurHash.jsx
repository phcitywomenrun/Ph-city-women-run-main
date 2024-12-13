import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Blurhash } from "react-blurhash";

const LoadBlurHashImage = ({ src, blurHash, alt, className }) => {
  return (
    <div className="w-full">
      <LazyLoadImage
        alt={alt}
        src={src}
        className={className}
        placeholder={
          <Blurhash
            hash={blurHash}
            width={"100%"}
            height={"100%"}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        }
      />
    </div>
  );
};

export default LoadBlurHashImage;
