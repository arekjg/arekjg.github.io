import React from "react";
import { StackIcon } from "./Icons";

const About = () => {
  return (
    <div id="about">
      <div>
        <p>
          I'm a self-taught programmer, continually seeking new challenges to
          fuel my growth.
        </p>
        <p>
          I have a background in various engineering fields, but in early 2023 I
          made a career change and started my first programming job.
        </p>
        <p className="p-center">Stack I use on a daily basis:</p>
        <div className="p-center">
          <StackIcon name={"net"} />
          <StackIcon name={"mssql"} />
        </div>

        <p className="p-center">Stack I have some experience with:</p>

        <div className="p-center">
          <StackIcon name={"html"} />
          <StackIcon name={"css"} />
          <StackIcon name={"js"} />
          <StackIcon name={"react"} />
          <StackIcon name={"python"} />
        </div>
      </div>
    </div>
  );
};

export default About;
