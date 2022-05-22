import React from "react";

const Social = () => {
  return (
    <div className="contact__social-net centered">
      <h3>Contact with me via...</h3>
      <div className="facebook">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/tarasbandrivskyy"
          >
            Facebook
          </a>
        </h3>
      </div>
      <div className="linkedIn">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/taras-bandrivskyy-1843b71a2/"
          >
            LinkedIn{" "}
          </a>
        </h3>
      </div>
      <div className="number">
        <a href="tel:+48729888601">+48-729-888-601</a>
      </div>
      <div className="number">
        <a href="mailto:tb.js.dev@gmail.com">tb.js.dev@gmail.com</a>
      </div>
    </div>
  );
};

export default Social;
