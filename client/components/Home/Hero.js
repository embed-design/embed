import Container from '../layout/Container'
import Navbar from '../common/Navbar'

const Hero = () => {
    return (
        <div className="bg-black py-8 overlay" >
            <Navbar darkMode={true}/>
            <Container>
                <div id="content" className="pt-8 lg:pt-20 xl:pt-32 pb-8 lg:pb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white fontface-medium" >
                        Why Embed?
                    </h1>
                    <h3 className="fontface-regular leading-normal tracking-wider text-white text-lg mt-5 md:text-xl lg:tracking-wider lg:leading-normal lg:text-2xl lg:mt-12 lg:w-11/12 xl:tracking-wide xl:leading-normal xl:text-4xl xl:mt-16" >
                    We understand your business goals and align strategies that enrich your customer experience through UX and UI Design.
                    </h3>
                </div>
                <div className="pb-14 lg:pb-20 xl:pb-24">
                    <img src="/assets/home_asset1.webp" alt="Why Embed?" className="hidden md:block"/>
                    <img src="/assets/home_asset_mobile.webp" alt="Why Embed?" className=" block md:hidden"/>
                </div>
            </Container>
        </div>
    )
}

export default Hero;