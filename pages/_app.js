import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../styles/globals.scss";
import GoToTop from "../src/components/GoToTop";

import { PageTransition } from "next-page-transitions";
import { Transition } from "../src/components/AnimatePage";
import { AnimatePresence, motion } from "framer-motion";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;
library.add(fas, far, fab);

function MyApp(props) {
  const { Component, pageProps, router } = props;
  return (
    <React.Fragment>
      <Navbar />
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
      <GoToTop />
      <Footer />
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </React.Fragment>
  );
}

export default MyApp;

// next.config.js
// const withCSS = require("@zeit/next-css");
// module.exports = withCSS({
//   // 開啟css模組化
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     // scoped class 格式
//     localIdentName: "[local]__[hash:base64:5]",
//   },
// });
