import React from "react";

const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ul className="nav-menu">
        <li className="nav-item" onClick={() => handleClickScroll("root")}>
          HOME
        </li>
        <li className="nav-item" onClick={() => handleClickScroll("about")}>
          ABOUT
        </li>
        <li className="nav-item" onClick={() => handleClickScroll("projects")}>
          PROJECTS
        </li>
      </ul>
    </>
  );
};

export default Header;
