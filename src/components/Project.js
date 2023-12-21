import React from "react";
import { StackIcon } from "./Icons";
import ProjectLinks from "./ProjectLinks";

const Project = ({
  name,
  type,
  description,
  stack,
  img,
  urls
}) => {
  return (
    <div className="project">
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
