import ComingSoon from '../components/EmbedCast/ComingSoon';
import Footer from '../components/common/Footer';
import Head from "next/head";

const EmbedCast = () => {
    return(
        <>
        <Head>
          <title>Embed Design | EmbedCast</title>
          <meta name="description" content="Coming Soon a podcast show to create an awareness about the impact of UX/UI on the business"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="md:overlay_full">
            <ComingSoon/>
            <Footer/>
        </div>
        </>
    )
}

export default EmbedCast;