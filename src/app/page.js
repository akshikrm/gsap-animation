"use client";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".animated-text", {
      scale: 1,
      opacity: 1,
      fontSize: "100px",
      scrollTrigger: {
        trigger: ".text-wrapper",
        start: "top top",
        end: "80% top",
        scrub: true,
        markers: true,
        pin: ".text-wrapper",
      },
    });

    gsap.from(".animated-image", {
      scale: 1,
      height: "100vh",
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: ".animated-text",
        // toggleActions: "play none reverse none",
        markers: true,
        scrub: true,
        start: "-300px top",
      },
    });
  }, []);

  return (
    <>
      <div className="text-wrapper">
        <div className="animated-image-foreground" />
        <div className="animated-image" />
        <h1 className="animated-text">Scale-Up Effect</h1>
      </div>
    </>
  );
}
//
//
// Function Code:
//     ---------------
// gsap.from(animatedText, {
//   scrollTrigger: {
//     trigger: animatedText,
//     start: "top 90%",
//     end: "top 40%",
//     scrub: true,
//   },
//   scale: 0.5,
//   opacity: 0,
//   duration: 2,
// });
//
//     HTML Code:
//     ---------------
//     <section class="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="scale-up">
//           <button class="btn btn-light position-absolute top-0 end-0 m-3 copy-btn">Copy Code</button>
//           <div class="row w-100">
//             <div class="col-12 text-center">
//               <h1 class="animated-text" style="translate: none; rotate: none; scale: none; opacity: 0.4643; transform: translate3d(0px, 0px, 0px) scale(0.7322);">Scale-Up Effect</h1>
//             </div>
//           </div>
//         </section>
