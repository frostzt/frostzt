import Image from "next/image";
import styles from "./ProfilePicture.module.scss";
import myPicture from "./my-image.jpeg";

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={myPicture} alt="My image" height={250} width={250} />
      </div>
    </div>
  );
};

export default ProfilePicture;
