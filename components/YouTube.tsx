import React from "react";

export default function Youtube({ id }: { id: string }) {
  return (
    <div className='aspect-video w-full'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className='w-full h-full'
        allow='autoplay; encrypted-media'
        title='Embedded YouTube video'
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
