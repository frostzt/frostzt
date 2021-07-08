import cx from "classnames";
import styles from "./Buttons.module.scss";
import React, { MouseEventHandler } from "react";

interface Props {
  children: string;
  extraClasses?: string[];
  handler?: MouseEventHandler;
}

export const DivButton: React.FC<Props> = ({
  children,
  handler,
  extraClasses,
}) => {
  return (
    <div
      onClick={handler}
      className={cx([styles.container, extraClasses ? extraClasses : null])}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const SubmitButton: React.FC<Props> = ({
  children,
  handler,
  extraClasses,
}) => {
  return (
    <button
      onClick={handler}
      className={cx([styles.container, extraClasses ? extraClasses : null])}
    >
      <div className={styles.content}>{children}</div>
    </button>
  );
};
