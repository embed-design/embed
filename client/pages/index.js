import Head from "next/head";
import Hero from "../components/Home/Hero";
import Services from '../components/Home/Services'
import CTA from '../components/Home/CTAForm'
import Footer from '../components/common/Footer'
import axios from 'axios';
import { useEffect, useState } from "react";

function EmbedApp() {

  const [ip, setIP] = useState("");

  useEffect(() => {
    axios.get("https://ipv4.icanhazip.com/").then(
      response => {
        setIP(response.data)
      }
    ).catch( err => {
      console.log(err);
    })
  }, [])

  return (
    <>
        <Head>
          <title>Welcome to Embed Design</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9453557.js"></script> */}
        </Head>
        <Hero/>
        <Services/>
        <CTA ip={ip} />
        <Footer/>
    </>
  )
}

export default EmbedApp;