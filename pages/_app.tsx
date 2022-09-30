import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify"
import { Layout } from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}

export default MyApp
