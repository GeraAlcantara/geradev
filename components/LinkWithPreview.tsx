import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function LinkWithPreview({ link }: { link: string }) {
  const [linkData, setLinkData] = useState<PreviewCardData>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [imagesrc, setImagesrc] = useState<string>("");

  useEffect(() => {
    const getPreview = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getLinkPreview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });
      const data: PreviewCardData = await res.json();
      setLinkData(data);
      const img = data.imageog ? data.imageog : data.image ? data.image : data.imagetwitter;
      setImagesrc(img!);
      setLoading(false);
    };
    setLoading(true);
    getPreview();
    return () => {
      setLinkData({});
      setLoading(false);
    };
  }, [link]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='border-gray-600 border-2 bg-slate-50 rounded-3xl overflow-hidden prose prose-a:no-underline prose-a:hover:text-gray-900 prose-a:text-gray-900 flex flex-col items-center justify-center m-auto max-w-[36rem] my-10 text-gray-900 cursor-pointer mb-6'>
          <a href={link} target='_blank' rel='noreferrer' className='prose-a:no-underline'>
            <div>
              {imagesrc && (
                <picture>
                  <source srcSet={imagesrc} type='imagen/webp' />
                  <source srcSet={imagesrc} type='imagen/jpg' />
                  <source srcSet={imagesrc} type='imagen/png' />
                  <img style={{ margin: 0 }} width={1280} height={640} src={imagesrc} alt={linkData.imageAlt ? linkData.imageAlt : ""} loading='lazy' />
                </picture>
              )}
              <div className='p-4'>
                {linkData.url ? (
                  <p className='text-sm text-gray-500 m-0'>{linkData.url}</p>
                ) : (
                  <p className='text-sm text-gray-500 m-0'>{link.replace(/(^\w+:|^)\/\//, "")}</p>
                )}
                {linkData.title ? (
                  <span className='text-xl font-bold leading-tight'>{linkData.title}</span>
                ) : (
                  <span className='text-xl font-bold leading-tight'>{linkData.titleog}</span>
                )}
                {linkData.description ? (
                  <p className='m-0 leading-tight'>{linkData.description}</p>
                ) : (
                  <p className='m-0 leading-tight'>{linkData.descriptionog}</p>
                )}
              </div>
            </div>
          </a>
        </div>
      )}
    </>
  );
}

export default LinkWithPreview;
