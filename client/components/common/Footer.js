import ArrowIcon from '../../assets/Icons/ArrowIcon.svg';
import InstagramIcon from '../../assets/Icons/instagram.svg';
import LinkedInIcon from '../../assets/Icons/linkedin.svg';

const Footer = () => {

    const executeScroll = () => {
        document.querySelector('/#contact-us').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
    return (
        <div className="w-full flex bg-black mt-20 md:mt-44">
            <div className="w-7/12">
                <p className="text-white md:text-base lg:text-xl xl:text-2xl fontface-bold md:text-center py-10 md:my-64 lg:my-72 xl:my-80">
                    We <span className="text-chocolate-600">Embed</span> customer experiences for your brand.
                </p>
            </div>
            <div className="w-5/12 py-16 flex flex-col justify-around md:pl-8 lg:pl-12 xl:pl-20 " style={{"backgroundColor": "rgba(255, 255, 255, 0.1)"}}>
                <div className="flex flex-col justify-between md:space-y-1 lg:space-y-2 xl:space-y-3">
                    <a href="#" className="transition duration-500 ease-in-out fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 hover:text-chocolate-600 hover:opacity-100">Work</a>
                    <a href="#" className="transition duration-500 ease-in-out fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 hover:text-chocolate-600 hover:opacity-100">Our Story.</a>
                    <a className="fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 ">EmbedCast <span className="md:text-sm lg:text-xl">(Coming Soon)</span></a>
                    <a onClick={executeScroll} className="cursor-pointer transition duration-500 ease-in-out fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 hover:text-chocolate-600 hover:opacity-100">Contact.</a>
                </div>
                <div className="mt-12">
                    <div className="max-w-max">
                        <div className="">
                            <a href="mailto:hello@embeddesign.in" className="transition duration-500 ease-in-out flex items-center fontface-medium md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-white text-opacity-30 hover:text-chocolate-600 hover:opacity-100 hover:text-xl">Mail us at hello@embeddesign.in 
                            <ArrowIcon className="md:ml-4 xl:ml-6 2xl:ml-8 md:h-3 xl:h-4 2xl:h-5 "/></a>
                        </div>
                        <hr className="opacity-30 mt-2 border-t-2"/>
                    </div>
                    <div>
                        <p className="text-chocolate-600  lg:text-xl xl:text-2xl fontface-medium md:mt-6 lg:mt-8 ">Follow us</p>
                        <div className="flex space-x-6 md:mt-6 xl:mt-8 ml-4">
                            <a href="#"><InstagramIcon className="md:w-10 lg:w-12 hover:fill-current hover:text-chocolate-600" /></a>
                            <a href="#"><LinkedInIcon className="md:w-10 lg:w-12" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;