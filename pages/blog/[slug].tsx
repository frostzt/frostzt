import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import React from 'react';
import { getFileBySlug, getFiles } from '../../lib/mdx';

interface BlogPostProps {
  post: {
    content: string;
    contentSerialized: any;
    matterDataSerialized: MDXRemoteSerializeResult<Record<string, unknown>>;
    slug: string;
    metaData: {
      content: string;
      slug: string;
      sub: string;
      title: string;
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { metaData, contentSerialized } = post;

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.content} />
      </Head>
      <MDXRemote compiledSource={contentSerialized.compiledSource} />
    </div>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('tutorials');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  if (slug) {
    try {
      const post = await getFileBySlug('tutorials', slug as string);
      return {
        props: {
          post,
        },
      };
    } catch (error) {}
  }

  return {
    notFound: true,
  };
};
