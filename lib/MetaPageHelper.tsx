import { NextSeo } from 'next-seo'

import { DefaultMetaData } from '../data/MetaData'

interface MetaPageHelperProps {
  pageTitle: string
  pageDescription: string
  socialImage: string
  socialImageAlt: string
  slug: string
}

export default function MetaPageHelper(props: MetaPageHelperProps): JSX.Element {
  return (
    <>
      <NextSeo
        canonical={DefaultMetaData.currentURL}
        description={props.pageDescription}
        openGraph={{
          url: `${DefaultMetaData.currentURL}/${props.slug}`,
          title: props.pageTitle,
          description: props.pageDescription,
          images: [
            {
              url: `${DefaultMetaData.currentURL}/socialCards/${props.socialImage}`,
              width: 1280,
              height: 640,
              alt: props.socialImageAlt
            }
          ],
          site_name: DefaultMetaData.siteName
        }}
        title={props.pageTitle}
      />
    </>
  )
}
