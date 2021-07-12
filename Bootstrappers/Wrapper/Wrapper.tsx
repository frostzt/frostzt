import cx from "classnames";
import styles from "./Wrapper.module.scss";

interface Props {
  extraClasses?: string[];
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children, extraClasses }) => {
  return <div className={cx([styles.wrapper, extraClasses ? extraClasses : ""])}>{children}</div>;
};

export default Wrapper;
