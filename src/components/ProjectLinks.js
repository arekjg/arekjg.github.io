import React from "react";

const ProjectLinks = ({ urls }) => {
  return (
    <>
      {urls.repo && (
        <a href={urls.repo} target="_blank" rel="noreferrer">
          <div className="link-container">
            <span>CODE</span>
          </div>
        </a>
      )}
      {urls.demo && (
        <a href={urls.demo} target="_blank" rel="noreferrer">
          <div className="link-container">
            <span>DEMO</span>
          </div>
        </a>
      )}
      {urls.gist && (
        <a href={urls.gist} target="_blank" rel="noreferrer">
          <div className="link-container">
            <span>GIST</span>
          </div>
        </a>
      )}
    </>
  );
};

export default ProjectLinks;
