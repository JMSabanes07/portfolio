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
