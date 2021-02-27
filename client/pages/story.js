import Hero from '../components/OurStory/Story_Hero';
import Footer from '../components/common/Footer';
import Content from '../components/OurStory/Story_Content';
import Head from 'next/head';
// TODO  Finish different responsive views for OurStory Page. 
const Story = () => {
    return(
        <>
            <Head>
                <title>Embed Design | Our Story</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            </Head>
            <div className="md:overlay_full">
                <Hero />
                <Content/>
                <Footer/>
            </div>
        </>
    )
}

export default Story;