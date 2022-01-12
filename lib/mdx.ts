import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'posts', type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'posts', type, `${slug}.mdx`), 'utf-8')
    : fs.readFileSync(path.join(root, 'posts', `${type}.mdx`), 'utf-8');

  const { data: metaData, content, matter: matterData } = matter(source);
  const matterDataSerialized = await serialize(matterData);
  const contentSerialized = await serialize(content);

  return {
    content,
    contentSerialized,
    matterDataSerialized,
    slug: slug ? slug : null,
    metaData,
  };
}
