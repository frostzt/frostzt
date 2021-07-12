import cx from "classnames";
import styles from "./Project.module.scss";
import Browser from "../BrowserComponent/Browser";

interface Props {
  // Details
  slug: string;
  title: string;
  image: string;
  description: string;

  // Colors
  primaryColor: string;
}

const Project: React.FC<Props> = ({ slug, title, image, description, primaryColor }) => {
  return (
    <div key={slug} className={styles.project}>
      <div className={styles.wrapper}>
        <Browser slug={slug} image={image} primaryColor={primaryColor} />
        <h2 className={cx(["heading-secondary", styles.title])}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
