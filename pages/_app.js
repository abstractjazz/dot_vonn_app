import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
return (
  <>
  <Head>
  <title>Dot Vonn</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel='dot vonn icon' href="/tab-favicon.png"/>
  </Head>
<Layout>
  <Component {...pageProps} />
</Layout>
  </>
  )
}

export default MyApp
