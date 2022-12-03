// use getStatic Paths and getStaticProps context

import { getSlugs, getPostBySlug, PostMeta, Post } from "../../api/blogpost";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import AuthorPostInfo from "../../../components/AuthorPostInfo";
import PostInfo from "../../../components/PostInfo";
import Image from "next/image";
import YouTube from "../../../components/YouTube";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

// leer de mdx contenido y metadata renderiar a la pagina de blog
interface PostPageProps {
  post: {
    meta: PostMeta;
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
  };
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <Image src={`/blog/images/${post.meta.imageSrc}`} layout='responsive' width={1920} height={576} objectFit='cover' alt={post.meta.imageAlt} className='' />
      <div className='mx-4'>
        <section className='m-auto mt-4 md:container flex flex-col items-center prose  xl:w-1/2   '>
          <header className='mt-10 gap-y-4 bg-gradient-to-br from-brand-black-100 to-brand-black-300 bg-brand-pink-800 rounded-3xl w-full py-10 px-10 flex flex-col gap-4 justify-center items-start '>
            <AuthorPostInfo authorAvatar={post.meta.authorAvatar} date={post.meta.date} authorName={post.meta.authorName} />
            <PostInfo />
            <h1 className='text-3xl  md:text-5xl text-brand-pink-50 font-bold font-Urbanist'>{post.meta.title}</h1>
          </header>
          <article className='prose lg:prose-xl xl:prose-xl prose-headings:text-brand-pink-50 prose-code:text-cyan-300 mt-4 w-full container'>
            <MDXRemote {...post.content} components={{ Image, YouTube }} />
          </article>
        </section>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { meta, content } = await getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return {
    props: {
      post: {
        meta,
        content: mdxSource,
      },
    },
  };
}