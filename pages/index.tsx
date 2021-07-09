import Head from "next/head";
import styles from "../styles/Home.module.scss";

// Components
import Header from "../Components/Header/Header";
import AboutMe from "../Components/AboutMe/AboutMe";
import BlogSnip from "../Components/BlogStuff/BlogSnip/BlogSnip";
import Projects from "../Components/Projects/Projects/Projects";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>frostzt - Portfolio</title>
        <meta name="description" content="Sourav Singh Rawat's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutMe />
      <BlogSnip />
      <Projects />
      <Footer />
    </div>
  );
}
