import Navbar from '../common/Navbar'; 
import Container from '../layout/Container';

const ComingSoon = () => {
    return (
        <div className="py-8 bg-white">
            <Navbar darkMode={false}/>
            <Container>
                <div className="xl:w-10/12 mx-auto py-32">
                    <img src="/assets/embedCast_light.svg" alt="EmbedCast" className="mx-auto md:w-6/12" />
                    <p className="fontface-regular text-xs md:text-2xl lg:text-2xl xl:text-4xl text-black text-center mt-6 md:mt-10 xl:mt-10 leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed tracking-wider">Refining UX for your business through our show!</p>
                    <p className="fontface-light text-base md:text-2xl xl:text-4xl text-black text-center mt-8 md:mt-10 xl:mt-10">Coming Soon...</p>
                </div>
            </Container>
        </div>
    )
}

export default ComingSoon;