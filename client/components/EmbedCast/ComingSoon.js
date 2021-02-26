import Navbar from '../common/Navbar'; 
import Container from '../layout/Container';

const ComingSoon = () => {
    return (
        <div className="py-8 bg-black">
            <Navbar darkMode={true}/>
            <Container>
                <div className="xl:w-10/12 mx-auto py-32">
                    <h1 className="fontface-medium text-white text-3xl text-center md:text-5xl xl:text-7xl"><span className="text-chocolate-600">Embed</span>Cast</h1>
                    <p className="fontface-regular text-xs md:text-2xl lg:text-3xl xl:text-4xl text-white text-center mt-3 md:mt-6 xl:mt-10 leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed tracking-wider">Your All-in-one place to know everything about User Experience</p>
                    <p className="fontface-light text-base md:text-3xl xl:text-5xl text-white text-center mt-8 xl:mt-10">Coming Soon...</p>
                </div>
            </Container>
        </div>
    )
}

export default ComingSoon;