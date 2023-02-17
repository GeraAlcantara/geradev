import AnimatedLetters from '../components/AnimatedLetters'
import ArticleCard from '../components/ArticleCard'
import { MetaDataBlog } from '../data/MetaData'
import MetaPageHelper from '../lib/MetaPageHelper'

import { getAllPosts, type PostMeta } from './api/blogpost'

export default function Blog({ posts }: { posts: PostMeta[] }): JSX.Element {
  const titlename = 'Blog'
  const txtgreating = 'Aquí encontrarás'
  const txtjobtitle = 'Mis artículos'

  return (
    <div>
      <MetaPageHelper {...MetaDataBlog} />
      <div className=" bg-brand-black-900 min-h-screen p-8 container m-auto">
        <div className="w-full xl:w-1/2 relative mb-10 flex flex-col justify-center">
          <div className="font-Raleway font-extrabold text-4xl xl:text-6xl transition-all ">
            <AnimatedLetters text={titlename} />
          </div>
          <div className="font-Urbanist text-xl xl:text-5xl xl:top-4 xl:relative mb-0 xl:mb-4 ">
            <AnimatedLetters text={txtgreating} />
          </div>

          <div className="font-Urbanist text-xl xl:text-5xl xl:relative">
            <AnimatedLetters text={txtjobtitle} />
          </div>
        </div>

        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps(): Promise<{ props: { posts: PostMeta[] } }> {
  const postsData = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta)

  return {
    props: {
      posts: postsData
    }
  }
}
