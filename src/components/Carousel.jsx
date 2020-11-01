import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colors = ["white", "cadetblue", "coral"];

function Arrow(props) {
  const { onClick, direction } = props;
  return (
    <div className={`angle-icon icon-dir`}>
      <button onClick={onClick}>
        <FontAwesomeIcon size="3x" icon={["fas", `angle-${direction}`]} />
      </button>
      <style jsx>{`
        .angle-icon {
          position: absolute;
          width: fit-content;
          top: 50%;
          &,
          .icon-dir {
            left: ${direction === "left" ? "-12% " : "106.5%"};
          }
          button {
            cursor: pointer;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            transition: all 0.2s ease;
            &:hover {
              background: #dbdbdb;
            }
            &:focus {
              outline: none;
            }
            &:active {
              background: #c2c2c2;
            }
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
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
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
