import { DefaultMetaData } from "./data/MetaData";
/**
 * @type {import('next-seo').DefaultSeoProps}
 */ const config = {
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: DefaultMetaData.currentURL,
    site_name: DefaultMetaData.siteName,
  },
  twitter: {
    handle: DefaultMetaData.twitterHandle,
    site: DefaultMetaData.twitterHandle,
    cardType: "summary_large_image",
  },
};
export default config;
