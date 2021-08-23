import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { v4 as uuidv4 } from "uuid";

const postsDirectory = path.join(process.cwd(), "posts");

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

  console.log(allPostsData);

  // Sort posts by date
  // return allPostsData.sort();
};
