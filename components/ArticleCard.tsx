import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiNewspaperLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { PostMeta } from "../pages/api/blogpost";

function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <div className='pb-4'>
      <hr className='hidden md:block border-brand-blue-100 mb-4' />
      <Link href={`/blog/${post.slug}`}>
        <article className='flex flex-col md:flex-row w-full group'>
          <div className='relative h-[200px] md:h-[300px] w-full md:w-10/12 rounded-xl overflow-hidden '>
            <Image
              src={`/blog/images/${post.imageSrc}`}
              layout='fill'
              objectFit='cover'
              alt={post.imageAlt}
              className='group-hover:scale-105 transition-all duration-150 ease-linear'
            />
          </div>
          <div className='text-brandWhite py-4  md:p-4 flex flex-col gap-2 justify-between lg:gap-4 w-full '>
            <div className='flex flex-col md:flex-row items-start md:justify-between md:items-center gap-4 md:gap-0'>
              <div className='rounded-full bg-lineGradient_1 px-3 py-[0.2rem] '>
                <p className='text-sm'>Tags</p>
              </div>
              <div className='text-brandWhite flex gap-2 md:gap-8'>
                <div className='flex gap-1'>
                  <RiNewspaperLine className='text-xl text-white ' /> <span className='text-sm group-hover:text-brand-pink-accent capitalize'>Article</span>
                </div>
                <div className='flex gap-1'>
                  <HiOutlineEye className='text-xl' /> <span className='text-sm group-hover:text-brand-pink-accent'>5min. </span>
                </div>
              </div>
            </div>
            <h2 className='text-4xl font-bold group-hover:text-brand-pink-accent '>{post.title}</h2>
            <p className=' text-lg max-w-prose'>{post.excerpt}</p>
            {/* avatar */}
            <div className='flex gap-4 items-center'>
              <div className='relative w-12 h-12'>
                <Image src={`/blog/images/${post.authorAvatar}`} layout='fill' objectFit='cover' alt='imagen de un articulo' className='rounded-full' />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-sm capitalize'>{post.authorName}</p>
                <p className='text-sm'>{post.date}</p>
              </div>
            </div>
          </div>
        </article>
      </Link>
      <hr className='hidden md:block border-brand-blue-100 mt-4' />
    </div>
  );
}

export default ArticleCard;
