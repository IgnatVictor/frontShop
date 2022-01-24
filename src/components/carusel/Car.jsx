
import React from "react";
import Slider from "react-slick";
import useStyles from "./styles";


function Responsive() {
  const classes = useStyles();
  
  
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
        <div>
          <img 
            className={classes.image} alt=""
            src="https://i.ibb.co/5Gp9HMw/computers.png"
          />
        </div>
        <div>
          <img
            className={classes.image} alt=""
            src="https://i.ibb.co/rfbSbbM/tv.png"
          />
        </div>
        <div>
          <img alt=""
            className={classes.image}
            src="https://i.ibb.co/jwyQQmd/cell.png"
          />
        </div>
        <div>
          <img alt=""
            className={classes.image}
            src="https://i.ibb.co/5nF74Dy/photo.png"
          />
        </div>
        <div>
          <img alt=""
            className={classes.image}
            src="https://i.ibb.co/4PvXqyF/headph.png"
          />
        </div>
        <div>
          <img alt=""
            className={classes.image}
            src="https://i.ibb.co/wYbbQgf/office-elec.png"
          />
        </div>
        <div>
          <img alt=""
            className={classes.image}
            src="https://i.ibb.co/0KT0nTq/smarthome.png"
          />
        </div>
        <div>
          <img alt=""
            className={classes.image}
            src="https://i.ibb.co/5nF74Dy/photo.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
