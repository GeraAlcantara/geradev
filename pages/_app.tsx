import Layout from "../components/Layout";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Nprogress from "nprogress";
import { DefaultSeo } from "next-seo";

// import your default seo configuration
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  Nprogress.configure({ showSpinner: false });
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      Nprogress.start();
    };

    const handleRouteChangeComplete = (url: string) => {
      Nprogress.done();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router.events]);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
