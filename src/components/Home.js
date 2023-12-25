import React, { useState, useRef, useEffect } from "react";
import Contact from "./Contact";

const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add("slide-in");
    }
  }, [isIntersecting]);

  return (
    <div id="home">
      <div className={`home ${isIntersecting ? "slide-in" : ""}`} ref={ref}>
        <p id="home-1">Hi, my name is Arek.</p>
        <p id="home-2">C#/.NET developer from Poland.</p>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
