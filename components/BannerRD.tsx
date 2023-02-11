import Image from "next/image";
import React from "react";

export default function BannerRD() {
  return (
    <div className='h-[150px] md:h-[300px] xl:h-[400px] w-full flex justify-center items-center gap-y-4 '>
      
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

    </div>
  );
}
