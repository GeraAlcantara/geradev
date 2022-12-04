import Head from "next/head";
import { DefaultMetaData } from "../data/MetaData";

interface MetaPageHelperProps {
  pageTitle: string;
  pageDescription: string;
  socialImage: string;
  socialImageAlt: string;
}

export default function MetaPageHelper(props: MetaPageHelperProps) {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name='description' content={props.pageDescription} />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={DefaultMetaData.twitterHandle} key='twhandle' />
        <meta name='twitter:title' content={props.pageTitle} />
        <meta name='twitter:description' content={props.pageDescription} />
        <meta name='twitter:image' content={`${DefaultMetaData.currentURL}${props.socialImage}`} />

        {/* Open Graph */}
        <meta property='og:url' content={DefaultMetaData.currentURL} key='ogurl' />
        <meta property='og:image' content={`${DefaultMetaData.currentURL}${props.socialImage}`} key='ogimage' />
        <meta property='og:site_name' content={DefaultMetaData.siteName} key='ogsitename' />
        <meta property='og:title' content={props.pageTitle} key='ogtitle' />
        <meta property='og:description' content={props.pageDescription} key='ogdesc' />
        <meta property='og:image:alt' content={props.socialImageAlt} />
        <meta property='og:type' content='website' />
      </Head>
    </>
  );
}
