import Layout from "../components/Layout";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Nprogress from "nprogress";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  /* Nprogress.configure({ showSpinner: false }); */
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url !== router.asPath) {
        Nprogress.start();
      }
    };

    const handleRouteChangeComplete = (url: string) => {
      if (url === router.asPath) {
        Nprogress.done();
      }
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router.events, router.asPath]);
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
