import Head from "next/head";
import Hero from "../components/Home/Hero";
import Services from '../components/Home/Services'
import CTA from '../components/Home/CTAForm'
import Footer from '../components/common/Footer'
import axios from 'axios';
import { useEffect, useState } from "react";
import Client from '../components/Work/Clients'
import Industry from '../components/Work/Industry'

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
          <title>Embed Design</title>
          <meta name="description" content="Embed Design is a research-based design organization that caters to the user needs, keeping them aligned to the business goals for an effective outcome through its solutions."/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero/>
        <Services/>
        <Client/>
        <Industry/>
        <CTA ip={ip} />
        <Footer/>
        
    </>
  )
}

export default EmbedApp;