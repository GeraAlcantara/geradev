import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { type MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import Image from 'next/image'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import { ArticleJsonLd } from 'next-seo'

import MetaPageHelper from '../../../lib/MetaPageHelper'
import YouTube from '../../../components/YouTube'
import AuthorPostInfo from '../../../components/AuthorPostInfo'
import { DefaultMetaData } from '../../../data/MetaData'
import LinkWithPreview from '../../../components/LinkWithPreview'
import PostInfo from '../../../components/PostInfo'
import { getSlugs, getPostBySlug, type PostMeta } from '../../api/blogpost'
// leer de mdx contenido y metadata renderiar a la pagina de blog
interface PostPageProps {
  post: {
    meta: PostMeta
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>
  }
}

export default function PostPage({ post }: PostPageProps): JSX.Element {
  // desarrollo-web-inicio slug puede venir con guiones, si hay guiones removerlos y convertirlos en espacios

  const titlefromSlug = post.meta.slug.replace(/-/g, ' ').toUpperCase()

  return (
    <>
      <MetaPageHelper
        pageDescription={post.meta.descriptionSEO}
        pageTitle={titlefromSlug}
        slug={post.meta.slug}
        socialImage={post.meta.imageSEO}
        socialImageAlt={post.meta.imageSEOAlt}
      />
      <ArticleJsonLd
        authorName={[{ name: post.meta.authorName }]}
        datePublished={new Date(post.meta.date).toISOString()}
        description={post.meta.descriptionSEO}
        images={[
          `${DefaultMetaData.currentURL}socialCards/${post.meta.imageSEO}, ${DefaultMetaData.currentURL}blog/images/${post.meta.imageSrc}`
        ]}
        isAccessibleForFree={true}
        publisherName={DefaultMetaData.siteName}
        title={post.meta.title}
        url={`${DefaultMetaData.currentURL}/${post.meta.slug}`}
      />
      <Image
        alt={post.meta.imageAlt}
        className=""
        height={576}
        layout="responsive"
        objectFit="cover"
        priority={true}
        src={`/blog/images/${post.meta.imageSrc}`}
        width={1920}
      />
      <div className="mx-4">
        <section className="m-auto mt-4 md:container flex flex-col items-center mb-10">
          <article className="prose lg:prose-xl xl:prose-xl prose-headings:text-brand-pink-50 prose-code:text-cyan-300 mt-4 container xl:max-w-none xl:w-[80ch]">
            <header className="mt-10 gap-y-4 bg-gradient-to-br from-brand-black-100 to-brand-black-300 bg-brand-pink-800 rounded-3xl py-10 px-10 flex flex-col gap-4 justify-center items-start  ">
              <AuthorPostInfo
                authorAvatar={post.meta.authorAvatar}
                authorName={post.meta.authorName}
                date={post.meta.date}
              />
              <PostInfo />
              <h1 className="text-3xl  md:text-5xl text-brand-pink-50 font-bold font-Urbanist">
                {post.meta.title}
              </h1>
            </header>
            <MDXRemote {...post.content} components={{ Image, YouTube, LinkWithPreview }} />
          </article>
        </section>
      </div>
    </>
  )
}

export async function getStaticPaths(): Promise<{
  paths: Array<{ params: { slug: string } }>
  fallback: false
}> {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({
  params
}: {
  params: { slug: string }
}): Promise<{ props: PostPageProps }> {
  const { slug } = params
  const { meta, content } = getPostBySlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  })

  return {
    props: {
      post: {
        meta,
        content: mdxSource
      }
    }
  }
}
