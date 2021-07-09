import Browser from "../BrowserComponent/Browser";
import styles from "./Project.module.scss";

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
        <Browser image={image} primaryColor={primaryColor} />
      </div>
    </div>
  );
};

export default Project;
