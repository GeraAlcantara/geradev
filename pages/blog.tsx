import { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import ArticleCard from "../components/ArticleCard";
import { MetaDataBlog } from "../data/MetaData";
import MetaPageHelper from "../lib/MetaPageHelper";
import { getAllPosts, PostMeta } from "./api/blogpost";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const titlename = "Blog";
  const txtgreating = "Aquí encontrarás";
  const txtjobtitle = "Mis artículos";
  
  return (
    <div>
      <MetaPageHelper {...MetaDataBlog} />
      <div className=' bg-brand-black-900 min-h-screen p-8 container m-auto'>
        <div className='w-full xl:w-1/2 relative mb-10 flex flex-col justify-center'>
          <div className='font-Raleway font-extrabold text-4xl xl:text-6xl transition-all '>
            <AnimatedLetters text={titlename} ></AnimatedLetters>
          </div>
          <div className='font-Urbanist text-xl xl:text-5xl xl:top-4 xl:relative mb-0 xl:mb-4 '>
            <AnimatedLetters text={txtgreating} ></AnimatedLetters>
          </div>

          <div className='font-Urbanist text-xl xl:text-5xl xl:relative'>
            <AnimatedLetters text={txtjobtitle} ></AnimatedLetters>
          </div>
        </div>

        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsData = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: {
      posts: postsData,
    },
  };
}
