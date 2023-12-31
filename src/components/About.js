import React, { useState, useRef, useEffect } from "react";
import { StackIcon } from "./Icons";

const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  const iconHeight = 45;

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
    <div id="about" ref={ref}>
      <div>
        <p className={`about ${isIntersecting ? "slide-in" : ""}`}>
          I'm a self-taught programmer, continually seeking new challenges to
          fuel my growth.
        </p>
        <p className={`about ${isIntersecting ? "slide-in" : ""}`}>
          I have a background in various engineering fields, but in early 2023 I
          made a career change and started my first programming job.
        </p>
        <p className={`p-center ${isIntersecting ? "slide-in" : ""}`}>
          Stack I use on a daily basis:
        </p>
        <div className={`p-center ${isIntersecting ? "slide-in" : ""}`}>
          <StackIcon name={"net"} height={iconHeight} />
          <StackIcon name={"mssql"} height={iconHeight} />
        </div>

        <p className={`p-center ${isIntersecting ? "slide-in" : ""}`}>
          Stack I have some experience with:
        </p>

        <div className={`p-center ${isIntersecting ? "slide-in" : ""}`}>
          <StackIcon name={"html"} height={iconHeight} />
          <StackIcon name={"css"} height={iconHeight} />
          <StackIcon name={"js"} height={iconHeight} />
          <StackIcon name={"react"} height={iconHeight} />
          <StackIcon name={"python"} height={iconHeight} />
        </div>
      </div>
    </div>
  );
};

export default About;
