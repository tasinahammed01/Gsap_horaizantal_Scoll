import React, { useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef();

  useGSAP(() => {
    let sections = gsap.utils.toArray(".panel");

    // Make horizontal scroll work only after scroll-container hits the top
    gsap.to(containerRef.current, {
      opacity: 1, // When it reaches the top, fade it in
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When the scroll-container hits the top of the screen
        toggleActions: "play none none reverse", // Fade in when hits top
      },
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 2,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <div className="h-[100vh]"></div> {/* Spacer above */}
      <div className="scroll-container" ref={containerRef}>
        <section className="panel bg-amber-200">
          <img src="https://i.ibb.co.com/mrC0pPCp/Tsai-12-1.jpg" alt="" />
        </section>
        <section className="panel bg-violet-400">
          <img src="https://i.ibb.co.com/zWhrzpP7/Tsai-13.jpg" alt="" />
        </section>
        <section className="panel bg-lime-300">
          <img src="https://i.ibb.co.com/z0tD9NZ/Tsai-34.jpg" alt="" />
        </section>
      </div>
      <div className="h-[100vh]"></div> {/* Spacer below */}
    </>
  );
};

export default App;
