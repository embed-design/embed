import ComingSoon from '../components/Work/ComingSoon';
import Footer from '../components/common/Footer';
import Head from "next/head";

const Work = () => {
    return(
        <>
        <Head>
          <title>Embed Design | Work</title>
          <meta name="description" content="Coming Soon with our UX Stories! "/>
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

export default Work;