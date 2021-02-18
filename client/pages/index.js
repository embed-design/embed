import Head from "next/head";
import Hero from "../components/Home/Hero";

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
    </>
  )
}

