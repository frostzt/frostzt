import Head from "next/head";
import styles from "./trillo.module.scss";

// Bootstrappers
import Wrapper from "../../../Bootstrappers/Wrapper/Wrapper";
import ButtonsGroup from "../../../Bootstrappers/ButtonsGroup/ButtonsGroup";
import ProjectHeader from "../../../Bootstrappers/ProjectHeader/ProjectHeader";
import ImageDescriptor from "../../../Bootstrappers/ImageDescriptor/ImageDescriptor";
import DetailedDescription from "../../../Bootstrappers/DetailedDescription/DetailedDescription";

const Trillo = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trillo - Project</title>
        <meta name="description" content="Trillo project by frostzt!" />
      </Head>
      <Wrapper>
        <ProjectHeader
          title="Trillo"
          primaryColor="#eb2f64"
          description="This is where I found love for my own styling. I learnt the correct way to style and use SASS and CSS. I learnt how to think when designing a web application and how to use SASS animations and other features."
        />
        <ImageDescriptor
          imageSource="/images/projects/trillo/trillo.png"
          description="Trillo, built using HTML and Vanilla CSS (using SASS as pre-processor)."
        />
        <DetailedDescription>
          Trillo is rather simple mockup for a frontend application but built using HTML and Vanilla
          CSS. I found SASS extra helpful here and found the idea behind SASS. CSS I found to be
          really frustrating when writing because of how it is structured.
          <br />
          <br />
          SASS gets rid of it as it uses structuring and the best part about SASS are the mixins;
          this site itself uses a responsive mixin that I made which makes making a site responsive
          10 times easier.
          <br />
          <br />
          UI and styling is important, but I believe that UX is even more important than that. What
          is the use of having a super good looking website that your users cannot even use
          properly.
        </DetailedDescription>
        <ButtonsGroup link="https://reactive-clothing.herokuapp.com/" />
      </Wrapper>
    </div>
  );
};

export default Trillo;
