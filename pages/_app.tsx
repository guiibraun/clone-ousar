import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify"
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}

export default MyApp
