import React, { useEffect } from "react";

// Styles and anim
import { motion } from "framer-motion";
import styles from "./PreLoader.module.scss";

interface Props {
  currentState: Boolean;
  changeState: CallableFunction;
}

const PreLoader: React.FC<Props> = () => {
  useEffect(() => {
    const loaded = () => {
      console.log("Loaded");
    };

    window.addEventListener("load", loaded);

    return () => window.removeEventListener("load", loaded);
  }, []);

  return <div className={styles.container}></div>;
};

export default PreLoader;
