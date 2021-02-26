import Hero from '../components/OurStory/Story_Hero';
import Footer from '../components/common/Footer';
import Content from '../components/OurStory/Story_Content';

// TODO  Finish different responsive views for OurStory Page. 
const Story = () => {
    return(
        <div className="md:overlay_full">
            <Hero />
            <Content/>
            <Footer/>
        </div>
    )
}

export default Story;