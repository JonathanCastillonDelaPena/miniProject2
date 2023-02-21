import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img15 from "../images/other2.jpg";
import img16 from "../images/S3.jpg";
import img17 from "../images/Med1.jpg";
import img18 from "../images/Med2.jpg";
import img19 from "../images/other1.jpg";
import img20 from "../images/Milk8.jpg";
import img21 from "../images/PHY1.jpg";
import img22 from "../images/d6.jpg";
import img23 from "../images/S5.jpg";
import img4 from "../images/C2.jpg";
import img5 from "../images/d1.jpg";
import img6 from "../images/Milk1.jpg";

function VendorCarousel() {
  return (
    <Carousel showThumbs={false} showArrows={false} autoPlay={true}>
      <div className="row">
        <div className="col-2">
          <img src={img15} alt="match" />
        </div>
        <div className="col-2">
          <img src={img16} alt="fudgee bar" />
        </div>
        <div className="col-2">
          <img src={img17} alt="alaxan" />
        </div>
        <div className="col-2">
          <img src={img18} alt="alcohol" />
        </div>
        <div className="col">
          <img src={img19} alt="baygon" />
        </div>
        <div className="vendor-item border p-4">
          <img src={img20} alt="great taste coffee" />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img src={img21} alt="head&shoulder" />
        </div>
        <div className="col-2">
          <img src={img22} alt="axion calamansi" />
        </div>
        <div className="col-2">
          <img src={img23} alt="boy bawang garlic" />
        </div>
        <div className="col-2">
          <img src={img4} alt="ginisa mix" />
        </div>
        <div className="col-2">
          <img src={img5} alt="ariel downy" />
        </div>
        <div className="col-2">
          <img src={img6} alt="bear brand milk" />
        </div>
      </div>
    </Carousel>
  );
}
export default VendorCarousel;
