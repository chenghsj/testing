import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const linkTitle = ["home", "features", "contacts"];

function Navbar() {
  const router = useRouter();
  let bottomSlider = useRef(null);
  let menuRef = useRef(null);

  useEffect(() => {
    moveSlider();
  });

  const moveSlider = () => {
    const activeLink = menuRef.querySelector(`.active-router`);
    console.log(menuRef);
    if (!activeLink) return;
    const menuRec = menuRef.getBoundingClientRect();
    const activeLinkRec = activeLink.getBoundingClientRect();
    const distance = activeLinkRec.left - menuRec.left;
    const width = activeLinkRec.width;

    requestAnimationFrame(() => {
      bottomSlider.setAttribute(
        "style",
        `display: block; transform: translateX(${distance}px); width:${width}px`
      );
    });
  };

  const activeRoute = (path) =>
    router.pathname === path ? "active-router" : null;

  return (
    <nav className="nav-container">
      <div>
        <brand />
        <h2 className="title">Company Name</h2>
      </div>
      <div className="linkMenu" ref={(el) => (menuRef = el)}>
        {linkTitle.map((title, index) => {
          const capitalizedTitle =
            title.charAt(0).toUpperCase() + title.slice(1);
          return (
            <Link href={`/${title === "home" ? "" : title}`}>
              <a className={activeRoute(`/${title === "home" ? "" : title}`)}>
                <small>{capitalizedTitle}</small>
              </a>
            </Link>
          );
        })}
        <div className="bt-slider" ref={(el) => (bottomSlider = el)}></div>
      </div>
      <style jsx>{`
        .nav-container {
          color: #cbcbcc;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
          .title {
            color: white;
          }
          a {
            margin: 0 1rem;
            &:hover {
              color: white;
            }
          }
        }
        .linkMenu {
          position: relative;
        }
        .bt-slider {
          position: absolute;
          bottom: -0.4rem;
          height: 2px;
          background: white;
          transition: 0.2s ease;
        }
        .active-router {
          color: white;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

{
  /* <Link href="/">
          <a className={activeRoute("/")}>
            <small>Home</small>
          </a>
        </Link>
        <Link href="/advantages">
          <a className={activeRoute("/advantages")}>
            <small>Advantages</small>
          </a>
        </Link>
        <Link href="/features">
          <a>
            <small>Features</small>
          </a>
        </Link>
         <Link href="/blog">
          <a>
            <small>Blog</small>
          </a>
        </Link>
        <Link href="/testimonals">
          <a>
            <small>Testimonals</small>
          </a>
        </Link>
        <Link href="/partners">
          <a>
            <small>Partners</small>
          </a>
        </Link>
        <Link href="/prices">
          <a>
            <small>Prices</small>
          </a>
        </Link>
        <Link href="/contacts">
          <a>
            <small>Contacts</small>
          </a>
        </Link> */
}
