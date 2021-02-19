import Head from "next/head";
import Hero from "../components/Home/Hero";
import Services from '../components/Home/Services'
import Contact from '../components/Home/CTAForm'
import Footer from '../components/common/Footer'

export default function EmbedApp() {
  return (
    <>
        <Head>
          <title>Welcome to Embed Design</title>
          <link
            rel="preload"
            href="/fonts/gordita/Go"
            as="font"
            crossOrigin=""
          />
        </Head>
        <Hero/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
  )
}

