import React from "react";

const Description = ({ activeProject }) => (
  <div className="projects__descriptions">
    {activeProject === null ? (
      <h3>Choose the Project to see his description</h3>
    ) : (
      <div key={activeProject.id} className="descr-text">
        <p>
          {activeProject.date} ({activeProject.type} project)
        </p>
        <h3>{activeProject.descr}</h3>
        {activeProject.type === "training" && (
          <div className="links">
            <a
              href={activeProject.code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            <a
              href={activeProject.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        )}
      </div>
    )}
  </div>
);

export default Description;
