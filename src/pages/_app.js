import Head from 'next/head'
import { ThemeProvider } from 'contexts/themeContext'
import { MenuProvider } from 'contexts/menuContext'
import { ScrollProvider } from 'contexts/scrollContext'
import { GlobalStyle } from '../styles/global'
import { LoaderProvider } from 'contexts/loaderContext'
import PageLoader from 'components/pageLoader'
import Script from 'next/script'

const EmptyComponent = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyComponent

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm Juan Manuel Sabanes and i'm a self-taught Software Developer. This is my web portfolio where i show you my skills like react js, my projects and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Juan Manuel Sabanes Software Developer - Portfolio Web</title>
      </Head>
      <Script
        strategy="lazyOnLoad"
        src="https://www.googletagmanager.com/gtag/js?id=G-H6E21576FL"
      />
      <Script id="googleAnalytics" strategy="lazyOnLoad">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-H6E21576FL');
        `}
      </Script>
      <GlobalStyle />
      <ScrollProvider>
        <LoaderProvider>
          <MenuProvider>
            <Layout>
              <PageLoader />
              <Component {...pageProps} />
            </Layout>
          </MenuProvider>
        </LoaderProvider>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default MyApp
