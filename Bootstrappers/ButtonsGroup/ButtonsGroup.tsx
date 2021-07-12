import styles from "./ButtonsGroup.module.scss";
import { LinkDivButton, OutLinkDivButton } from "../../Components/Buttons/Buttons";

interface Props {
  link: string;
}

const ButtonsGroup: React.FC<Props> = ({ link }) => {
  return (
    <div className={styles.btns}>
      <LinkDivButton extraClasses={[styles.btns__back]} linkto="/">
        Go back
      </LinkDivButton>
      <OutLinkDivButton extraClasses={[styles.btns__visit]} linkto={link}>
        Check it out!
      </OutLinkDivButton>
    </div>
  );
};

export default ButtonsGroup;
