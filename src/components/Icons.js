export const GithubIcon = () => (
  <div className="icon-wrapper">
    <a href="https://github.com/arekjg" target="_blank" rel="noreferrer">
      <img
        src="./assets/icons/normal/github.png"
        className="icon icon-normal"
        title="Check out my GitHub"
        alt=""
        
        />
      <img
        src="./assets/icons/hover/github.png"
        className="icon icon-hover"
        title="Check out my GitHub"
        alt=""
      />
    </a>
  </div>
);

export const LinkedinIcon = () => (
  <div className="icon-wrapper">
    <a
      href="https://www.linkedin.com/in/arekjg/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="./assets/icons/normal/linkedin.png"
        className="icon icon-normal"
        title="Connect with me on LinkedIn"
        alt=""
      />
      <img
        src="./assets/icons/hover/linkedin.png"
        className="icon icon-hover"
        title="Connect with me on LinkedIn"
        alt=""
      />
    </a>
  </div>
);

export const MailIcon = () => (
  <div className="icon-wrapper">
    <a href="mailto:arekjg@gmail.com" target="_blank" rel="noreferrer">
      <img
        src="./assets/icons/normal/gmail.png"
        className="icon icon-normal"
        title="Send me an email"
        alt=""
      />
      <img
        src="./assets/icons/hover/gmail.png"
        className="icon icon-hover"
        title="Send me an email"
        alt=""
      />
    </a>
  </div>
);

export const StackIcon = ({ name }) => (
  <div className="icon-wrapper">
    <img
      src={`./assets/icons/normal/${name}.png`}
      className="stack-icon icon-normal"
      title={name.toUpperCase()}
      alt=""
    />
    <img
      src={`./assets/icons/hover/${name}.png`}
      className="stack-icon icon-hover"
      title={name.toUpperCase()}
      alt=""
    />
  </div>
);
