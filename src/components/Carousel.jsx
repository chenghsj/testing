import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colors = ["white", "cadetblue", "coral"];

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="angle-left">
      <FontAwesomeIcon
        size="3x"
        onClick={onClick}
        icon={["fas", "angle-left"]}
      />
      <style jsx>{`
        .angle-left {
          position: absolute;
          width: fit-content;
          left: -10%;
          top: 50%;
          &:active {
            color: gray;
          }
        }
      `}</style>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="angle-right">
      <FontAwesomeIcon
        size="3x"
        onClick={onClick}
        icon={["fas", "angle-right"]}
      />
      <style jsx>{`
        .angle-right {
          position: absolute;
          width: fit-content;
          left: 107%;
          top: 50%;
          &:active {
            color: gray;
          }
        }
      `}</style>
    </div>
  );
}

function Carousel() {
  let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ margin: "-2% 0" }}>
        <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="container">
      <Slider {...sliderSettings}>
        {colors.map((color, index) => {
          return (
            <div className="slider-box">
              <div
                className="color-slider"
                style={{ backgroundColor: `${color}` }}
              >
                <h1>Lorem ipsum dolor sit</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  cumque sequi hic a eveniet sunt illo dolores excepturi rem
                  corrupti.
                </p>
                <button>Show Case</button>
              </div>
            </div>
          );
        })}
      </Slider>
      <style jsx>{`
        @mixin btn-focus {
          &:active {
            box-shadow: 0 0 0 2px #6a9fd1;
          }
          &:focus {
            outline: none;
          }
        }
        .container {
          min-width: 900px;
          width: 65%;
          div {
            ul {
              top: 40px;
            }
          }
          div:focus {
            outline: none;
          }
        }
        .color-slider {
          width: 100%;
          height: 50vh;
          text-align: center;
          padding: 0 10rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: scaleX(0.999) translateX(0.05%);
          button {
            @include btn-focus;
            border: none;
            color: white;
            background: #4779a9;
            height: 2.5rem;
            margin-top: 2rem;
            padding: 0 2rem;
            width: fit-content;
            &:hover {
              background: #5089be;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default Carousel;
