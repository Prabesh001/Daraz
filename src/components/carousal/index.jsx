import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

const CarouselComponent = () => {
  const images = [photo1, photo2, photo3];

  return (
    <CCarousel controls indicators transition="slide" interval={false}>
      {images.map((image, index) => (
        <CCarouselItem key={index}>
          <CImage
            style={{ width: "100%", height:"350px"}}
            src={image}
            alt={image}
          />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

export default CarouselComponent;
