import React from "react";
import Head from "next/head";

// Interfaces
import { PostMetaData } from "../../Interfaces/Posts.interface";

// Lib
import { getSortedPost } from "../../lib/posts";

// Components
import BlogBrief from "../../Components/BlogStuff/BlogBrief/BlogBrief";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

// Styles
import styles from "../../styles/blog.module.scss";

interface Props {
  allPostsData: PostMetaData[];
}

const Blog: React.FC<Props> = ({ allPostsData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>frostzt&apos;s blog</title>
        <meta name="description" content="Sourav Singh Rawat's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <NavigationBar />
        <h1 className={styles.title}>BLOG</h1>
        <p className={styles.title__sub}>
          I love writing things not only about technology and programming in general but other
          things as well. So expect quite a lot of things here!
        </p>
        <div className={styles.blogs}>
          {allPostsData.map((meta) => (
            <BlogBrief key={meta.id} title={meta.title} desc={meta.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPostsData = getSortedPost();

  return {
    props: {
      allPostsData,
    },
  };
};
