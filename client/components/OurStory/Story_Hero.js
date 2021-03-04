import Navbar from '../common/Navbar'
import Container from '../layout/Container'

const Story_Hero = () => {
    return (
        <div className="py-8 bg-black">
            <Navbar darkMode={true}/>
            <Container>
                <div className="pt-8 xl:mt-20 md:pb-16 lg:pb-20">
                    <h1 className="fontface-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">About us</h1>
                    <h4 className="w-11/12 mx-auto fontface-light tracking-wide leading-snug text-lg md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug text-center text-white mt-8 md:mt-12 lg:mt-16 xl:mt-24">We are a clan of <span className="fontface-medium">Researchers</span>, <span className="fontface-medium">Designers</span> and <span className="fontface-medium">Developers!</span></h4>
                </div>
            </Container>
        </div>
    )
}

export default Story_Hero;