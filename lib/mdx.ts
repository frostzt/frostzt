import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkCodeTitles from 'remark-code-titles';
import remarkSlug from 'remark-slug';

const root = process.cwd();

/**
 * Type here refers to the directory inside the data folder
 * @param type The type of posts you wanna fetch
 * @returns All the files inside a type
 */
export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

/**
 * Returns the data for a mdx file, the returned data contains the metadata and the content to be rendered
 * @param type directory inside the data folder
 * @param slug the slug of the post you want to fetch
 * @returns Object, containing raw content, content serialized, slug, and the metadata
 */
export async function getFileBySlug(type: string, slug?: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf-8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf-8');

  const { data: metaData, content } = matter(source);
  const contentSerialized = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkAutoLinkHeadings, remarkSlug, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    content,
    contentSerialized,
    slug: slug ? slug : null,
    metaData,
  };
}

/**
 * Retuns the metadata of all the files available
 * @param type dir inside the data directory
 * @returns Array of metadata for all the files
 */
export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf-8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ] as any;
  }, []);
}
