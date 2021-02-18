import Container from '../layout/Container'
import Navbar from '../common/Navbar'

const Hero = () => {
    return (
        <div className=" bg-black py-8 overlay" >
            <Navbar />
            <Container>
                <div id="content" className=" pt-48 pb-24">
                    <h1 className=" text-8xl text-white" style={{fontFamily: "Gordita Medium, sans-serif"}}>
                        Why Embed?
                    </h1>
                    <h3 className=" text-5xl text-white mt-16 leading-relaxed  w-10/12" style={{fontFamily: "Gordita Regular, sans-serif"}}>
                    We understand your business goals and align strategies that enrich your customer experience through UX and UI Design.
                    </h3>
                </div>
                <div>
                    <img src="/assets/home_asset1.png" alt="Why Embed?" />
                </div>
            </Container>
        </div>
    )
}

export default Hero;