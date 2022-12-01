import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

// define path to blog posts directory posts
const POSTS_PATH = path.join(process.cwd(), "pages/posts");

export const getSlugs = (): string[] => {
  const paths = sync(path.join(`${POSTS_PATH}/*mdx`)); // get all mdx files in posts directory
  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1]; // get the last part of the path
    const [slug, _ext] = fileName.split("."); // split the file name by the dot
    return slug;
  });
};

export interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  excerpt: string;
  descriptionSEO: string;
  imageSrc: string;
  imageAlt: string;
  authorAvatar: string;
  authorName: string;
}

export const getPostBySlug = (slug: string): Post => {
  const fullPath = path.join(`${POSTS_PATH}/${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    content,
    meta: {
      slug,
      imageSrc: data.imageSrc ?? "blogimage.jpg",
      title: data.title ?? "No title",
      tags: data.tags ?? ["no tags"].sort(), // sort tags alphabetically
      date: data.date.toString() ?? new Date().toISOString(), // if no date is provided, use today's date
      excerpt: data.excerpt ?? " no excerpt provided",
      descriptionSEO: data.descriptionSEO ?? " no descriptionSEO provided",
      imageAlt: data.imageAlt ?? " no imageAlt provided",
      authorAvatar: data.authorAvatar ?? "blogimage.jpg",
      authorName: data.authorName ?? "Gerardo",
    },
  };
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      if (a.meta.date < b.meta.date) return 1;
      if (a.meta.date > b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};
