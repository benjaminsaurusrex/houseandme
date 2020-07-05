import * as React from "react";
import "./styles.css";

export const AppRoot: React.FC = () => {
  return (
    <div className="app-root">
      <div className="app-root__header">
        <h1>
          <span role="img" aria-label="house emoji">
            🏡{" "}
          </span>
          <span className="color-alt">house</span>
          <span className="color-alt-2">and</span>
          <span className="color-alt">me</span>
          <span role="img" aria-label="house emoji">
            {" "}
            🏡
          </span>
        </h1>
      </div>
      <main className="app-root__main color-main">
        <span role="img" aria-label="construction emoji">
          🏗️
        </span>{" "}
        Under construction!{" "}
        <span role="img" aria-label="construction emoji">
          🏗️
        </span>
      </main>
    </div>
  );
};
