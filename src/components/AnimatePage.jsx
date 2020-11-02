import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";

function AnimatePage({ children }) {
  let container = useRef(null);
  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .fromTo(container, { opacity: 0 }, { opacity: 1, duration: 1 });
  //   return () => {
  //     gsap.timeline().to(container, { opacity: 0, duration: 1 });
  //   };
  // });
  return (
    <div ref={(el) => (container = el)}>{children}</div>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.3 }}
    // >
    //   {children}
    // </motion.div>
  );
}

export default AnimatePage;
