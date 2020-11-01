import React from "react";
import Link from "next/link";
import { linkTitle, capitalizeTitle } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="container">
      <div className="contact-container">
        <h4>
          <FontAwesomeIcon
            className="icon"
            size="2x"
            icon={["fab", "github"]}
          />
        </h4>
        <h2>Company</h2>
        <div>
          <i>
            <FontAwesomeIcon size="1x" icon={["fab", "facebook"]} />
          </i>
          <i>
            <FontAwesomeIcon size="1x" icon={["fab", "google"]} />
          </i>
          <i>
            <FontAwesomeIcon size="1x" icon={["fab", "envira"]} />
          </i>
          <i>
            <FontAwesomeIcon size="1x" icon={["fab", "amazon"]} />
          </i>
        </div>
      </div>
      <div className="nav-container">
        <h4>Navigation</h4>
        <div className="link-container">
          {linkTitle.map((title, index) => {
            return (
              <Link
                scroll={false}
                key={`${title}-${index}`}
                href={`/${title === "home" ? "" : title}`}
              >
                <a className="link">{capitalizeTitle(title)}</a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="newsletter-container">
        <h4>Newsletter</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" />
          <button>Submit</button>
        </form>
        <p>
          <small>
            There are many variations of passages of Lorem ipsum available
          </small>
        </p>
      </div>
      <style jsx>
        {`
          @mixin btn-focus {
            &:active {
              box-shadow: 0 0 0 2px #6a9fd1;
            }
            &:focus {
              outline: none;
            }
          }
          @mixin input-focus {
            ::placeholder {
              color: #9b9b9b;
            }
            &:focus {
              box-shadow: 0 0 3px 2px deepskyblue;
              outline: none;
            }
          }
          @mixin justify-center {
            display: flex;
            justify-content: center;
          }
          .container {
            color: #515966;
            background: white;
            width: 100%;
            min-width: 900px;
            height: 25vh;
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            padding: 0 2rem;
            h4 {
              font-weight: 500;
              margin: 2rem 0 0.5rem;
            }
          }
          .contact-container {
            width: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
              font-weight: 500;
              margin-top: 0.5rem;
            }
            i {
              margin: 0 0.3rem;
            }
          }
          .nav-container {
            width: calc(100% / 3);
            min-width: 200px;
            .link-title {
              text-align: center;
            }
            .link-container {
              display: flex;
              flex-wrap: wrap;
            }
            .link {
              font-size: 0.8rem;
              font-weight: 300;
              margin: 0.3rem 0;
              width: 35%;
            }
          }
          .newsletter-container {
            width: calc(100% / 3);
            p {
              font-size: 0.4rem;
            }
            form {
              input {
                @include input-focus;
                border: 1px solid #515966;
                height: 2rem;
                padding-left: 0.4rem;
                width: 60%;
                margin: 1rem 0;
              }
              button {
                @include btn-focus;
                border: none;
                color: white;
                background: #4779a9;
                height: 2rem;
                width: fit-content;
                padding: 0 1rem;
                margin: 0.5rem;
                &:hover {
                  background: #5089be;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
