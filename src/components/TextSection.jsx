import React from "react";

import textSectionStyles from "../styles/textSection.module.scss";

const TextSection = () => {
  return (
    <div className={textSectionStyles.container}>
      <div className={textSectionStyles.title}>Vitamate</div>
    </div>
  );
};

export default TextSection;
