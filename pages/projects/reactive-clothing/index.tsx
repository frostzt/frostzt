import Head from "next/head";
import styles from "./rc.module.scss";

// Bootstrappers
import Wrapper from "../../../Bootstrappers/Wrapper/Wrapper";
import ButtonsGroup from "../../../Bootstrappers/ButtonsGroup/ButtonsGroup";
import ProjectHeader from "../../../Bootstrappers/ProjectHeader/ProjectHeader";
import ImageDescriptor from "../../../Bootstrappers/ImageDescriptor/ImageDescriptor";
import DetailedDescription from "../../../Bootstrappers/DetailedDescription/DetailedDescription";

const ReactiveClothing = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reactive Clothing - Project</title>
        <meta name="description" content="Reactive Clothing project by frostzt!" />
      </Head>
      <Wrapper>
        <ProjectHeader
          title="Reactive Clothing"
          primaryColor="#35363a"
          description="A retail clothing store designed using Reactjs, Redux, SCSS. This is where I mastered React and its respective design patterns. I believe that the correct design patterns are more important than just knowing how to code."
        />
        <ImageDescriptor
          imageSource="/images/projects/reactive-clothing/reactive-clothing.png"
          description="Reactive Clothing, built using Reactjs, Redux, SCSS, and other libraries."
        />
        <DetailedDescription>
          Reactive clothing is where I mastered React and Redux design patterns. I learnt how to
          write scaleable and maintainable React and Redux code. With proper use of SCSS modules for
          styling.
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
        <ButtonsGroup link="https://reactive-clothing.herokuapp.com/" />
      </Wrapper>
    </div>
  );
};

export default ReactiveClothing;
