import Image from "next/image";
import styles from "./ImageDescriptor.module.scss";

interface Props {
  imageSource: string;
  description: string;
}

const ImageDescriptor: React.FC<Props> = ({ description, imageSource }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imageSource} alt="Althemic Landing Page" layout="fill" />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default ImageDescriptor;
