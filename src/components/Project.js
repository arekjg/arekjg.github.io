import React, { useState, useRef, useEffect } from "react";
import { StackIcon } from "./Icons";
import ProjectLinks from "./ProjectLinks";

const Project = ({ name, type, description, stack, img, urls }) => {
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
    <div className="project" ref={ref}>
      <div className="project-info">
        <div className={`name ${isIntersecting ? "slide-in" : ""}`}>{name}</div>
        <div className={`type ${isIntersecting ? "slide-in" : ""}`}>{type}</div>
        <div className={`urls ${isIntersecting ? "slide-in" : ""}`}>
          <ProjectLinks urls={urls} />
        </div>
        <div className={`description ${isIntersecting ? "slide-in" : ""}`}>
          {description}
        </div>
        <div className={`stack ${isIntersecting ? "slide-in" : ""}`}>
          {stack.map((i) => (
            <StackIcon key={i} name={i} />
          ))}
        </div>
      </div>

      <div className={`project-img ${isIntersecting ? "slide-in" : ""}`}>
        {img && <img src={`./assets/ss/${img}`} alt="" />}
      </div>
    </div>
  );
};

export default Project;
