import ComingSoon from '../components/EmbedCast/ComingSoon';
import Footer from '../components/common/Footer';
import Head from "next/head";

const Story = () => {
    return(
        <>
        <Head>
            <title>Embed Design | EmbedCast</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </Head>
        <div className="md:overlay_full">
            <ComingSoon/>
            <Footer/>
        </div>
        </>
    )
}

export default Story;