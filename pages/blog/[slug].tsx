import React from "react";

// Lib
import { getSortedPost } from "../../lib/posts";

// Layout
import BlogLayout from "../../Layout/BlogLayout/BlogLayout";
import { PostMetaData } from "../../Interfaces/Posts.interface";

interface Props {
  paths: PostMetaData[];
}

const BlogPost: React.FC<Props> = ({ paths }) => {
  console.log(paths);

  return (
    <BlogLayout>
      <div className=""></div>
    </BlogLayout>
  );
};

export default BlogPost;

export const getStaticPaths = () => {
  const paths = getSortedPost();

  return {
    paths,
    fallback: false,
  };
};
