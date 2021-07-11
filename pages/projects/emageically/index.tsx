import Head from "next/head";
import styles from "./emageically.module.scss";

// Bootstrappers
import Wrapper from "../../../Bootstrappers/Wrapper/Wrapper";
import ButtonsGroup from "../../../Bootstrappers/ButtonsGroup/ButtonsGroup";
import ProjectHeader from "../../../Bootstrappers/ProjectHeader/ProjectHeader";
import ImageDescriptor from "../../../Bootstrappers/ImageDescriptor/ImageDescriptor";
import DetailedDescription from "../../../Bootstrappers/DetailedDescription/DetailedDescription";

const Emageically = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emageically - Project</title>
        <meta name="description" content="Emageically project by frostzt!" />
      </Head>
      <Wrapper extraClasses={[styles.wrapper]}>
        <ProjectHeader
          title="Emageically"
          primaryColor="#fe7f5b"
          description="Just like Unsplash this site is a hosting platform built using Reactjs. It also consists of a seperate backend powering the images to be fetched directly from the API."
        />
        <ImageDescriptor
          imageSource="/images/projects/emageically/emageically.png"
          description="Emageically, built using Reactjs, SCSS, and other libraries."
        />
        <DetailedDescription>
          Emageically is another side-project that I made it was meant to be integrated with Emage,
          however I thought why not go ahead and make a new one.
          <br />
          <br />
          Emageically is built using TypeScript with Reactjs, the strong typing system provided by
          TS provides a better way to write and structure react code that is fail-safe and easy to
          understand.
          <br />
          <br />
          One specific reason to build something like Emageically was to practice the Masonry layout
          and how can it be created using vanilla CSS and with some help from React.
        </DetailedDescription>
        <ButtonsGroup link="https://emageically.netlify.app/" />
      </Wrapper>
    </div>
  );
};

export default Emageically;
