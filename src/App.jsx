import { useState } from "react";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import Blob from "./components/Blob";

import indexStyles from "./styles/index.module.scss";

function App() {
  return (
    <div className={indexStyles.backdrop}>
      <div className={indexStyles.container}>
        <div className={indexStyles.title}>
          <TextSection />
        </div>
        <div className={indexStyles.box}>
          <Box />
        </div>
        <div className={indexStyles.blob}>
          <Blob />
        </div>
      </div>
    </div>
  );
}

export default App;
