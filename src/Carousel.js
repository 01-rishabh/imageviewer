import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { data } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "black" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black" }} />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="main" style={{ margin: "30px" }}>
      <h1>Image Viewer using ReactJs</h1>
      <h2>Submitted by: Rishabh Dora</h2>
      <br />
      <Slider
        autoplay
        autoplaySpeed={2000}
        dots
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        /* the functionality i want to use*/
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{ width: "165px", height: "165px", objectFit: "cover" }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "100%", height: "50vh" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
