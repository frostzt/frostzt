import cx from "classnames";
import Link from "next/link";
import styles from "./Buttons.module.scss";
import React, { MouseEventHandler } from "react";

interface Props {
  children: string;
  extraClasses?: string[];
  handler?: MouseEventHandler;
}

interface LinkProps {
  linkto: string;
  children: string;
  extraClasses?: string[];
  handler?: MouseEventHandler;
}

export const DivButton: React.FC<Props> = ({ children, handler, extraClasses }) => {
  return (
    <div onClick={handler} className={cx([styles.container, extraClasses ? extraClasses : null])}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const SubmitButton: React.FC<Props> = ({ children, handler, extraClasses }) => {
  return (
    <button
      onClick={handler}
      className={cx([styles.container, extraClasses ? extraClasses : null])}
    >
      <div className={styles.content}>{children}</div>
    </button>
  );
};

export const LinkDivButton: React.FC<LinkProps> = ({ children, handler, extraClasses, linkto }) => {
  return (
    <Link href={linkto} passHref>
      <div onClick={handler} className={cx([styles.container, extraClasses ? extraClasses : null])}>
        <div className={styles.content}>{children}</div>
      </div>
    </Link>
  );
};

export const OutLinkDivButton: React.FC<LinkProps> = ({
  children,
  handler,
  extraClasses,
  linkto,
}) => {
  return (
    <a href={linkto} target="_blank" rel="noreferrer">
      <div onClick={handler} className={cx([styles.container, extraClasses ? extraClasses : null])}>
        <div className={styles.content}>{children}</div>
      </div>
    </a>
  );
};
