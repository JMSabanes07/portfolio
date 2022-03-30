import Head from 'next/head'
import { ThemeProvider } from 'contexts/themeContext'
import { MenuProvider } from 'contexts/menuContext'
import { ScrollProvider } from 'contexts/scrollContext'
import { GlobalStyle } from '../styles/global'
import { LoaderProvider } from 'contexts/loaderContext'
import PageLoader from 'components/pageLoader'

const EmptyComponent = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyComponent

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm Juan Manuel Sabanes and i'm a self-taught Software Developer. This is my web portfolio where i show my skills and my personal and professional projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
