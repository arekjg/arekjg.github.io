import React, { useState, useRef, useEffect } from "react";
import { StackIcon } from "./Icons";
import ProjectLinks from "./ProjectLinks";

const Project = ({ name, type, description, stack, img, urls }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      document.querySelectorAll(".project-info div").forEach((el) => {
        el.classList.add("slide-in");
      });
      document.querySelectorAll(".project-img").forEach((el) => {
        el.classList.add("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="project" ref={ref}>
      <div className="project-info">
        <div className="name">{name}</div>
        <div className="type">{type}</div>
        <div className="urls">
          <ProjectLinks urls={urls} />
        </div>
        <div className="description">{description}</div>
        <div className="stack">
          {stack.map((i) => (
            <StackIcon key={i} name={i} />
          ))}
        </div>
      </div>

      <div className="project-img">
        {img && <img src={`./assets/ss/${img[0]}`} alt="" />}
      </div>
    </div>
  );
};

export default Project;
