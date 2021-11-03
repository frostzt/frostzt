import React from "react";
import Head from "next/head";

// Lib
import { getPostsSlug, getPostData } from "../../lib/posts";

// Layout
import BlogLayout from "../../Layout/BlogLayout/BlogLayout";

interface PostData {
  date: string;
  desc: string;
  slug: string;
  title: string;
}
interface Props {
  postData: PostData;
}

const BlogPost: React.FC<Props> = ({ postData }) => {
  console.log(postData);

  return (
    <BlogLayout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={}>{postData.date}</div> */}
    </BlogLayout>
  );
};

export default BlogPost;

// Get paths for individual Posts
export const getStaticPaths = () => {
  const paths = getPostsSlug();

  return {
    paths,
    fallback: false,
  };
};

// Get post data for the current selected post
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug);

  return {
    props: {
      postData,
    },
  };
};
