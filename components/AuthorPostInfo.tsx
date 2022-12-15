import Image from "next/image";

interface AuthorPostInfoProps {
  authorName: string;
  authorAvatar: string;
  date: string;
}

export default function AuthorPostInfo({ authorName, authorAvatar, date }: AuthorPostInfoProps) {
  const formateDate = new Date(date).toLocaleDateString("es-MX", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).toString();
  return (
    <>
      <div className='flex gap-4 items-center'>
        <div className='relative w-12 h-12'>
          <Image src={`/blog/images/${authorAvatar}`} layout='fill' objectFit='cover' alt='imagen de un articulo' className='rounded-full' />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-sm capitalize'>{authorName}</span>
          <time className='text-sm' dateTime={formateDate}>
            {formateDate}
          </time>
        </div>
      </div>
    </>
  );
}
