import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { v4 as uuidv4 } from "uuid";

const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Returns Posts Meta Data as an arrary.
 * @returns PostMetaData[]
 */
export const getSortedPost = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Assign each post a unique id
    const id = uuidv4();

    // Read the markdown file
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Parse metadata
    const metadata = matter(fileContents);

    // Return data and id
    return {
      id,
      ...metadata.data,
    };
  });

  // Sort posts by date
  // @ts-ignore
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

/**
 * Returns all the slug for all the posts
 * @returns PostSlugs[]
 */
export const getPostsSlug = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
};
