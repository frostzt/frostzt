import Head from "next/head";
import styles from "./natours.module.scss";

// Bootstrappers
import Wrapper from "../../../Bootstrappers/Wrapper/Wrapper";
import ButtonsGroup from "../../../Bootstrappers/ButtonsGroup/ButtonsGroup";
import ProjectHeader from "../../../Bootstrappers/ProjectHeader/ProjectHeader";
import ImageDescriptor from "../../../Bootstrappers/ImageDescriptor/ImageDescriptor";
import DetailedDescription from "../../../Bootstrappers/DetailedDescription/DetailedDescription";

const Natours = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natours - Project</title>
        <meta name="description" content="Natours project by frostzt!" />
      </Head>
      <Wrapper>
        <ProjectHeader
          title="Natours"
          primaryColor="#55c57a"
          description="Natours is a all in one solution to book awesome tours and visit different places. It is built for adventurous people who want to live their life freely and want to explore awesome places."
        />
        <ImageDescriptor
          imageSource="/images/projects/natours/natours.png"
          description="Natours built with Nodejs, Expressjs, Pug, SCSS, and MongoDB."
        />
        <DetailedDescription>
          Natours is another side project that I made it was the time when I was learning Nodejs for
          the first time. It uses Expressjs and Nodejs runtime for the API.
          <br />
          <br />I learnt how to appreciate the design and development of the backend even more as I
          learnt about Nestjs which another awesome framework built on top of Express (or Fastify).
          <br />
          <br />I also used Mongoose to connect to MongoDB Atlas, service hosted and provided by
          MongoDB itself. More sort of a cloud that keeps the DB work abstracted away!
        </DetailedDescription>
        <ButtonsGroup link="https://natours-sourav.herokuapp.com/" />
      </Wrapper>
    </div>
  );
};

export default Natours;
