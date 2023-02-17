import Image from 'next/image'
import Link from 'next/link'

import { uuidv4 } from '../lib/utils/uuidv4'
import { type PostMeta } from '../pages/api/blogpost'

import AuthorPostInfo from './AuthorPostInfo'
import PostInfo from './PostInfo'

function ArticleCard({ post }: { post: PostMeta }): JSX.Element {
  return (
    <div className="pb-4">
      <hr className="hidden md:block border-brand-blue-100 mb-4" />
      <Link href={`/blog/post/${post.slug}`}>
        <article className="flex flex-col md:flex-row w-full group cursor-pointer">
          <div className="relative min-h-[200px] md:min-h-[300px] md:max-h-[550px] w-full md:w-10/12 rounded-xl overflow-hidden ">
            <Image
              alt={post.imageAlt}
              className="group-hover:scale-105 transition-all duration-150 ease-linear"
              layout="fill"
              objectFit="cover"
              src={`/blog/images/${post.imageSrc}`}
            />
          </div>
          <div className="text-brandWhite py-4  md:p-4 flex flex-col gap-2 justify-between lg:gap-4 w-full ">
            <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center gap-4 md:gap-0">
              <div className="rounded-full bg-lineGradient_1 px-3 py-[0.2rem] ">
                <div className="flex  gap-x-2">
                  {post.tags.map((tag, _i) => (
                    <span
                      key={uuidv4()}
                      className="text-xs font-bold text-brand-pink-100 capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <PostInfo />
            </div>
            <h2 className="text-4xl font-bold group-hover:text-brand-pink-accent ">{post.title}</h2>
            <p className=" text-lg ">{post.excerpt}</p>
            {/* avatar */}
            <AuthorPostInfo
              authorAvatar={post.authorAvatar}
              authorName={post.authorName}
              date={post.date}
            />
          </div>
        </article>
      </Link>
      <hr className="hidden md:block border-brand-blue-100 mt-4" />
    </div>
  )
}

export default ArticleCard
