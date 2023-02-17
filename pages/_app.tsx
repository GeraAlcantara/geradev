import '../styles/globals.scss'
import { Analytics } from '@vercel/analytics/react'
import { type AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Nprogress from 'nprogress'
import { DefaultSeo } from 'next-seo'

import Layout from '../components/Layout'
import SEO from '../next-seo.config'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  Nprogress.configure({ showSpinner: false })
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      if (router.asPath === url) return
      Nprogress.start()
    }

    const handleRouteChangeComplete = (url: string): void => {
      if (router.asPath === url) return
      Nprogress.done()
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}
