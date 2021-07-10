import styles from "./DetailedDescription.module.scss";

interface Props {
  children: React.ReactNode;
}

const DetailedDescription: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>{children}</p>
    </div>
  );
};

export default DetailedDescription;
