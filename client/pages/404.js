import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const NotFoundPage = () => {
    return (
        <div className="xl:pt-10">
            <Navbar darkMode={true}/>
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/Frame.svg" alt="404 error" className="w-10/12 lg:w-7/12 xl:w-4/12 mt-16 mx-auto"/>
                <p className="fontface-regular text-3xl mt-16"><span className="text-chocolate-600">Oops! </span>We'll get you embedded soon!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;