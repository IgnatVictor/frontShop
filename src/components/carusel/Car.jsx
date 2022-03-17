
import React from "react";
import Slider from "react-slick";
import useStyles from "./styles";
import { CATEGORY } from "../atom/Atom";
import { useAtom } from "jotai";

function Responsive() {
  const classes = useStyles();
  const [category, setCategory] = useAtom(CATEGORY);
  
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 9000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  className={classes.carousell}>
      <br />
      <br />
      <br />
      <br />

      <Slider {...settings}>
        <div >
          <img onClick={()=> setCategory("Pc")}
            className={classes.image} alt=""
            src="https://i.ibb.co/5Gp9HMw/computers.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Tablets")}
            className={classes.image} alt=""
            src="https://i.ibb.co/rfbSbbM/tv.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Bars")} alt=""
            className={classes.image}
            src="https://i.ibb.co/jwyQQmd/cell.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Mouse")} alt=""
            className={classes.image}
            src="https://i.ibb.co/5nF74Dy/photo.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Led")} alt=""
            className={classes.image}
            src="https://i.ibb.co/4PvXqyF/headph.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Pc")} alt=""
            className={classes.image}
            src="https://i.ibb.co/wYbbQgf/office-elec.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Pads")} alt=""
            className={classes.image}
            src="https://i.ibb.co/0KT0nTq/smarthome.png"
          />
        </div>
        <div>
          <img onClick={()=> setCategory("Pc")} alt=""
            className={classes.image}
            src="https://i.ibb.co/5nF74Dy/photo.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
