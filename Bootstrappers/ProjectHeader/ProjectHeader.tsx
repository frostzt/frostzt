import cx from "classnames";
import styles from "./ProjectHeader.module.scss";

interface Props {
  title: string;
  description: string;
  primaryColor: string;
}

const ProjectHeader: React.FC<Props> = ({ title, description, primaryColor }) => {
  return (
    <div className={styles.container}>
      <h1
        style={{ borderBottom: `0.5rem solid ${primaryColor}` }}
        className={cx([styles.title, "heading-primary"])}
      >
        {title}
      </h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectHeader;
