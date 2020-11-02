import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GoToTop() {
  const router = useRouter();
  let goToTop = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!goToTop) return;
      requestAnimationFrame(() => {
        goToTop.style = `opacity:${window.scrollY >= 60 ? 1 : 0};`;
      });
    });
  }, [router]);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleGoToTop}
      ref={(el) => (goToTop = el)}
      className="go-to-top"
    >
      <button>
        <FontAwesomeIcon color="white" size="2x" icon={["fas", "angle-up"]} />
      </button>
      <style jsx>{`
        .go-to-top {
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
      `}</style>
    </div>
  );
}

export default GoToTop;
