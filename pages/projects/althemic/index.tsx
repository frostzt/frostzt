import Head from "next/head";
import styles from "./althemic.module.scss";
import { OutLinkDivButton, LinkDivButton } from "../../../Components/Buttons/Buttons";

// Bootstrappers
import Wrapper from "../../../Bootstrappers/Wrapper/Wrapper";
import ProjectHeader from "../../../Bootstrappers/ProjectHeader/ProjectHeader";
import ImageDescriptor from "../../../Bootstrappers/ImageDescriptor/ImageDescriptor";
import DetailedDescription from "../../../Bootstrappers/DetailedDescription/DetailedDescription";
import ButtonsGroup from "../../../Bootstrappers/ButtonsGroup/ButtonsGroup";

const Althemic = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Althemic - Project</title>
        <meta name="description" content="Althemic project by frostzt!" />
      </Head>
      <Wrapper extraClasses={[styles.wrapper]}>
        <ProjectHeader
          title="Althemic"
          primaryColor="#fe7f5b"
          description="A startup of my own. People today are more affected by depression rather than other diseases, Althemic tries to use internet and social media as a way to help people join and find people to talk to!"
        />
        <ImageDescriptor
          imageSource="/images/projects/althemic/althemic.png"
          description="Althemic, built using Reactjs, Redux, SCSS, and other libraries."
        />
        <DetailedDescription>
          Althemic is a side project that I made it is yet in Alpha stage and registration is almost
          disabled to prevent people from doing meaningless stuff.
          <br />
          <br />
          It is built using Reactjs, Redux, and custom CSS styling. The main reason this project is
          good is because the way I have wrote the code is maintainable. React with Redux gets huge
          very quickly and due to all the boilerplate code involved it gets cumbersome.
          <br />
          <br />
          The project uses Redux Sagas to help with asynchoronous Redux which is the defining
          standard today! I really love Sagas as they help a lot when the project is large and are
          really good and performant. However being experienced with Thunk I think the only thing
          that is involved is the added level of complexity.
        </DetailedDescription>
        <ButtonsGroup link="https://althemic-alpha.herokuapp.com/" />
      </Wrapper>
    </div>
  );
};

export default Althemic;
