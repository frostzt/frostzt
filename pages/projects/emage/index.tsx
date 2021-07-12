import Head from "next/head";
import styles from "./emage.module.scss";

// Bootstrappers
import Wrapper from "../../../Bootstrappers/Wrapper/Wrapper";
import ButtonsGroup from "../../../Bootstrappers/ButtonsGroup/ButtonsGroup";
import ProjectHeader from "../../../Bootstrappers/ProjectHeader/ProjectHeader";
import ImageDescriptor from "../../../Bootstrappers/ImageDescriptor/ImageDescriptor";
import DetailedDescription from "../../../Bootstrappers/DetailedDescription/DetailedDescription";

const Emage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emage - Project</title>
        <meta name="description" content="Emage project by frostzt!" />
      </Head>
      <Wrapper>
        <ProjectHeader
          title="Emage"
          primaryColor="#ffffff"
          description="A image uploading and hosting application. Allows you to use Imgur or Emage API for hosting your applications for absolutely free of cost! You also don't need to authenticate with Imgur just upload get link and enjoy!"
        />
        <ImageDescriptor
          imageSource="/images/projects/emage/emage.png"
          description="Emage, built using Reactjs, Expressjs, SCSS, and other libraries."
        />
        <DetailedDescription>
          Emage is a simple drag-and-drop image hosting solution. Completely free of cost and easy
          to use. The best part is that it provides Imgur API without authentication and also
          provides an Emage API (built using Expressjs) for hosting.
          <br />
          <br />
          Emage is built using Reactjs for the frontend and Expressjs for the backend. The backend
          and the frontend are both written in Vanilla JavaScript with highly maintainable and
          easy-to-understand code.
        </DetailedDescription>
        <ButtonsGroup link="https://emageical.herokuapp.com/" />
      </Wrapper>
    </div>
  );
};

export default Emage;
