import React from "react";

// Interfaces
import { PostMetaData } from "../Interfaces/Posts.interface";

// Lib
import { getSortedPost } from "../lib/posts";

interface Props {
  allPostsData: PostMetaData[];
}

const Blog: React.FC<Props> = ({ allPostsData }) => {
  console.log(allPostsData);

  return (
    <div>
      <h1>BLOG</h1>
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
