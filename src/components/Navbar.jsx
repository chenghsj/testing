import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const linkTitle = [
  "home",
  "advantages",
  "features",
  "contacts",
  "partners",
];
export const capitalizeTitle = (title) =>
  title.charAt(0).toUpperCase() + title.slice(1);

function Navbar() {
  const router = useRouter();
  let bottomSlider = useRef(null);
  let menuRef = useRef(null);
  let navContainer = useRef(null);

  useEffect(() => {
    moveSlider();
  }, [router]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!navContainer) return;
      else
        requestAnimationFrame(() => {
          navContainer.style = `background: ${
            window.scrollY > 0 ? "rgba(39, 42, 48, 0.9)" : "#515966;"
          } `;
        });
    });
  }, [router]);

  const moveSlider = () => {
    const activeLink = menuRef.querySelector(`.active-router`);
    if (!activeLink) return;
    const menuRec = menuRef.getBoundingClientRect();
    const activeLinkRec = activeLink.getBoundingClientRect();
    const distance = activeLinkRec.left - menuRec.left;
    const width = activeLinkRec.width;

    requestAnimationFrame(() => {
      bottomSlider.style = `display: block; transform: translateX(${distance}px); width:${width}px`;
    });
  };

  const activeRoute = (path) =>
    router.pathname === path ? "active-router" : null;

  return (
    <nav className="nav-container" ref={(el) => (navContainer = el)}>
      <div className="brand-container">
        <Link href="/">
          <h2 className="title">
            <FontAwesomeIcon size="1x" icon={["fab", "github"]} />
            &ensp;Company
          </h2>
        </Link>
      </div>
      <div className="linkMenu" ref={(el) => (menuRef = el)}>
        {linkTitle.map((title, index) => {
          return (
            <Link
              scroll={false}
              key={`${title}-${index}`}
              href={`/${title === "home" ? "" : title}`}
            >
              <a className={activeRoute(`/${title === "home" ? "" : title}`)}>
                <small>{capitalizeTitle(title)}</small>
              </a>
            </Link>
          );
        })}
        <div className="bt-slider" ref={(el) => (bottomSlider = el)}></div>
      </div>
      <div className="search-container">
        <FontAwesomeIcon icon={["fas", "search"]} />
        <input type="text" placeholder="Search" />
      </div>
      <style jsx>{`
        .nav-container {
          height: 60px;
          color: #cbcbcc;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
          position: sticky;
          top: 0;
          transition: all 0.3s linear;
          z-index: 3;
          .title {
            color: white;
            font-weight: 500;
            cursor: pointer;
          }
          a {
            margin: 0 1rem;
            &:hover {
              color: white;
            }
          }
        }
        .brand-container {
          min-width: 150px;
        }
        .linkMenu {
          position: relative;
        }
        .bt-slider {
          position: absolute;
          bottom: -0.4rem;
          height: 2px;
          background: white;
          transition: 0.3s linear;
        }
        .active-router {
          color: white;
        }
        .search-container {
          display: flex;
          justify-content: flex-end;
          width: 130px;
          input {
            background: none;
            border: none;
            border-bottom: 1px solid #cbcbcc;
            box-sizing: border-box;
            margin: 0 0.4rem;
            width: 50px;
            color: white;
            transition: all 0.3s ease;
            ::placeholder {
              color: #cbcbcc;
            }
            &:focus {
              outline: none;
              width: 100px;
            }
          }
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
