import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const NotFoundPage = () => {
    return (
        <div className="pt-8 mb-20 md:mb-44">
            <Navbar darkMode={false}/>
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/Frame.svg" alt="404 error" className="w-8/12 lg:w-5/12 xl:w-4/12 mt-16 md:mt-20 mx-auto"/>
                <p className="fontface-regular text-lg md:text-3xl mt-16 md:mt-20 text-center"><span className="text-chocolate-600">Oops! </span>We'll get you embedded soon!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;