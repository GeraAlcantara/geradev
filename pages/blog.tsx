import { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import ArticleCard from "../components/ArticleCard";
import { MetaDataBlog } from "../data/MetaData";
import MetaPageHelper from "../lib/MetaPageHelper";
import { getAllPosts, PostMeta } from "./api/blogpost";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const [letterClass, setletterClass] = useState("animatedLeters");
  const [paragraphClass, setParagraphClass] = useState("");

  const titlename = "Blog";
  const txtgreating = "Aquí encontrarás";
  const txtjobtitle = "Mis artículos";
  useEffect(() => {
    const removeaddClass = setTimeout(() => {
      setletterClass("cursor-progress");
      setParagraphClass("slide-in-bottom");
    }, 4000);

    return () => {
      clearTimeout(removeaddClass);
    };
  }, []);
  return (
    <div>
      <MetaPageHelper {...MetaDataBlog} />
      {/* Todo tendra contenido trendra el display dentro del Main  */}

      <div className=' bg-brand-black-900 min-h-screen p-8'>
        <div className='w-full xl:w-1/2 relative mb-10 flex flex-col justify-center'>
          <div className='font-Raleway font-extrabold text-3xl xl:text-6xl transition-all '>
            <AnimatedLetters letterClass={` ${letterClass} `} text={titlename} idx={10}></AnimatedLetters>
          </div>
          <div className='font-Urbanist xl:text-5xl xl:top-4 xl:relative mb-4 '>
            <AnimatedLetters letterClass={` ${letterClass} `} text={txtgreating} idx={1}></AnimatedLetters>
          </div>

          <div className='font-Urbanist xl:text-5xl xl:relative'>
            <AnimatedLetters letterClass={` ${letterClass} `} text={txtjobtitle} idx={20}></AnimatedLetters>
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
