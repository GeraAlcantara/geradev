import Image from "next/image";
import React from "react";

export default function BannerRD() {
  return (
    <div className='h-[150px] md:h-[300px] xl:h-[400px] w-full flex justify-between items-center gap-y-4 bg-[#8b786f]'>
      {/* rectangle white rounded full righ */}
      <div className='min-h-[50%] w-4/12 bg-[#f0f5fb] rounded-r-full'></div>
      {/* circle middle */}

      <div className='relative overflow-hidden rounded-full w-1/4 max-w-[340px]'>
        <Image
          src={"/images/banner_jaguarEk.jpg"}
          layout='responsive'
          objectFit='cover'
          alt={"Banner RD"}
          width={1024}
          height={1024}
          className='w-full h-full'
        />
      </div>

      {/* rectangle rounded full left */}
      <div className='min-h-[50%] w-4/12 bg-[#f0f5fb] rounded-l-full'></div>
    </div>
  );
}
