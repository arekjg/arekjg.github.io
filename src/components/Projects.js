import React from "react";
import Project from "./Project";
import data from "../data/projects.json";

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      {data.map((p) => (
        <Project
          key={p.id}
          name={p.name}
          type={p.type}
          description={p.description}
          stack={p.stack}
          img={p.img}
          urls={p.urls}
        />
      ))}
    </div>
  );
};

export default Projects;
