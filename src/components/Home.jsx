import React, { useEffect, useRef } from "react";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  let goToTop = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!goToTop) return;
      goToTop.style = `opacity:${
        window.scrollY >= window.innerHeight / 2 ? 1 : 0
      };`;
    });
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div
        onClick={handleGoToTop}
        ref={(el) => (goToTop = el)}
        className="go-to-top"
      >
        <button>
          <FontAwesomeIcon color="white" size="2x" icon={["fas", "angle-up"]} />
        </button>
      </div>
      <div className="block-1">
        <div className="img-1"></div>
        <div className="block-1-form">
          <h1>One page site</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p>
              <small>All fields are required for filling</small>
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="block-2">
        <div className="slider-container">
          <Carousel />
        </div>
        <div className="features-container">
          <h1>Advantages</h1>
          <div className="section-container">
            {features.map((feature, index) => {
              return (
                <section key={`${feature}-${index}`}>
                  <FontAwesomeIcon
                    size="3x"
                    icon={["fab", `${feature.icon}`]}
                  />
                  <h3>{feature.feature}</h3>
                  <p>
                    <small>{feature.description}</small>
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
      <div className="block-3">
        <div className="block-3-inner">
          <div>
            <h1>
              <span style={{ fontWeight: 400 }}>Want to see more?</span>
              <br />
              Subscribe to our news.
            </h1>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="block-4">
        <h1>Blog</h1>
        <div className="block-4-inner">
          <div className="img-2"></div>
          <div className="blog-post-container">
            {posts.map((post, index) => {
              return (
                <div key={`${post}-${index}`} className="blog-post">
                  <div className="img-3"></div>
                  <section>
                    <time>{post.time}</time>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          $main-color: #515966;
          @mixin input-focus {
            ::placeholder {
              color: #9b9b9b;
            }
            &:focus {
              box-shadow: 0 0 3px 2px deepskyblue;
              outline: none;
            }
          }
          @mixin btn-focus {
            &:active {
              box-shadow: 0 0 0 2px #6a9fd1;
            }
            &:focus {
              outline: none;
            }
          }
          @mixin flex-column {
            display: flex;
            flex-direction: column;
          }
          .container {
            max-width: 100%;
            height: 100%;
          }
          .go-to-top {
            cursor: pointer;
            opacity: 0;
            position: fixed;
            right: 3%;
            bottom: 5%;
            z-index: 5;
            transition: all 0.3s ease;
            button {
              width: 40px;
              height: 40px;
              border: none;
              background: #656e7e;
              border-radius: 50%;
              box-shadow: 0px 2px 6px -3px rgba(0, 0, 0, 1);
              &:active {
                box-shadow: none;
                transform: translateY(2px);
              }
              &:focus {
                outline: none;
              }
            }
          }
          .block-1,
          .block-2,
          .block-4 {
            margin: 0 auto;
            width: 1000px;
            height: 100vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .block-1 {
            padding: 0 1.5rem 150px;
          }
          .img-1 {
            border-radius: 10px;
            background: #cbccce;
            box-shadow: 20px 20px 0px #7284a5;
            min-width: 300px;
            height: 300px;
          }
          .block-1-form {
            @include flex-column;
            justify-content: center;
            align-items: center;
            min-width: 200px;
            h1 {
              margin-top: 0;
              margin-bottom: 1rem;
              font-size: 3rem;
            }
            form {
              @include flex-column;
              width: 100%;
              align-items: start;

              p {
                font-size: 1rem;
                margin: 0;
              }
              input {
                @include input-focus;
                width: 100%;
                border: none;
                border-radius: 3px;
                line-height: 2rem;
                margin: 0.5rem 0;
                padding-left: 0.4rem;
              }

              button {
                @include btn-focus;
                font-size: 1rem;
                line-height: 2rem;
                border-radius: 3px;
                border: none;
                color: white;
                background: #4779a9;
                margin-top: 2rem;
                width: 50%;
                &:hover {
                  background: #5089be;
                }
              }
            }
          }
          .block-2,
          .block-4 {
            color: $main-color;
            width: 100%;
            background-color: #eef0f5;
            position: relative;
          }
          .slider-container {
            width: 100%;
            height: 60vh;
            position: absolute;
            top: -20%;
            display: flex;
            justify-content: center;
          }
          .features-container {
            width: 100%;
            position: relative;
            top: 15%;
            padding: 3rem;
            text-align: center;
            h1 {
              font-weight: 500;
            }
            .section-container {
              display: flex;

              h3 {
                margin-bottom: 0;
                font-weight: 500;
              }
              section {
                @include flex-column;
                border-radius: 5px;
                font-weight: 300;
                justify-content: center;
                align-items: center;
                background: white;
                margin: 1rem 3rem;
                padding: 1rem;
                width: calc(100% / 3);
                height: 40vh;
              }
            }
          }
          .block-3 {
            padding: 3rem;
            .block-3-inner {
              border: 1px solid white;
              border-radius: 4px;
              display: flex;
              align-items: center;
              padding: 0 3rem;
              text-align: center;
              div {
                flex: 1;
              }
              form {
                flex: 1;
                button,
                input {
                  background: white;
                  border: none;
                  height: 2rem;
                  padding: 0 2rem;
                  margin: 0.5rem;
                }
                button {
                  @include btn-focus;
                }
                input {
                  @include input-focus;
                  width: 50%;
                  padding: 0 1rem;
                }
              }
            }
          }
          .block-4 {
            @include flex-column;
            height: fit-content;
            padding: 3rem 0;
            h1 {
              font-weight: 500;
            }
            .block-4-inner {
              display: flex;
              justify-content: center;
              min-width: 1000px;
              .img-2 {
                cursor: pointer;
                width: 35%;
                min-width: 400px;
                background: $main-color;
                border-radius: 10px;
                margin: 1.5rem 1rem;
                &:before {
                  content: "All Items";
                  color: white;
                  display: block;
                  position: relative;
                  top: 80%;
                  text-align: center;
                }
                &:after {
                  content: "";
                  display: block;
                  padding-bottom: 100%;
                }
              }
              .blog-post-container {
                width: 50%;
              }
              .blog-post {
                display: flex;
                margin: 1.5rem 1rem;
                width: 100%;
                section {
                  width: fit-content;
                  margin-left: 1rem;
                  font-weight: 300;
                  h4 {
                    font-weight: 500;
                  }
                }
                .img-3 {
                  cursor: pointer;
                  min-width: 200px;
                  width: 55%;
                  border-radius: 10px;
                  background: $main-color;
                  transition: all 0.3s ease;
                  &:after {
                    content: "";
                    display: block;
                    padding-bottom: 100%;
                  }
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;

const features = [
  {
    icon: "react",
    feature: "Feature One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi reiciendis odit repellat, laboriosam adipisci nam magnam fugit illum sapiente!",
  },
  {
    icon: "vuejs",
    feature: "Feature Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit fugit tenetur sequi expedita hic!",
  },
  {
    icon: "angular",
    feature: "Feature Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi reiciendis odit repellat, laboriosam adipisci nam magnam fugit illum sapiente!",
  },
];

const posts = [
  {
    time: "6 May 2018",
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, suscipit harum. Ullam quaerat alias numquam id rerum illo perspiciatis repudiandae?",
  },
  {
    time: "7 May 2017",
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita cumque blanditiis porro recusandae voluptate nulla perspiciatis similique assumenda facilis!",
  },
];
