import React from "react";

// Lib
import { getPostsSlug } from "../../lib/posts";

// Layout
import BlogLayout from "../../Layout/BlogLayout/BlogLayout";
import { PostMetaData } from "../../Interfaces/Posts.interface";

interface Props {}

const BlogPost: React.FC<Props> = () => {
  return (
    <BlogLayout>
      <div className=""></div>
    </BlogLayout>
  );
};

export default BlogPost;

export const getStaticPaths = () => {
  const paths = getPostsSlug();

  return {
    paths,
    fallback: false,
  };
};
