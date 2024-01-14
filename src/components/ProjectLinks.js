import React from "react";

const ProjectLinks = ({ url }) => {
  return (
    <a
      href={url.url}
      target="_blank"
      rel="noreferrer"
      className="link-container"
    >
      <span>{url.caption}</span>
    </a>
  );
};

export default ProjectLinks;
