import ArrowIcon from '../../assets/Icons/ArrowIcon.svg';
import InstagramIcon from '../../assets/Icons/instagram.svg';
import LinkedInIcon from '../../assets/Icons/linkedin.svg';
import { useRouter } from 'next/router';

const Footer = () => {

    const router = useRouter();

    const executeScroll = () => {
        if(router.pathname === "/"){
            document.querySelector('#contact-us').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }else {
            window.location.href = "/#contact-us"
        }
    }
    return (
        <>
        <div className="block md:hidden bg-black">
            <div className="w-10/12 mx-auto pt-10 pb-4">
                <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="transition duration-500 ease-in-out fontface-bold text-white hover:text-chocolate-600 hover:opacity-100">Work</a>
                    <a href="/embedcast" className="transition duration-500 ease-in-out fontface-bold text-white hover:text-chocolate-600 hover:opacity-100">EmbedCast</a>
                    <a href="/story" className="transition duration-500 ease-in-out fontface-bold text-white hover:text-chocolate-600 hover:opacity-100">Our Story.</a>
                    <a onClick={executeScroll} className="cursor-pointer transition duration-500 ease-in-out fontface-bold text-white hover:text-chocolate-600 hover:opacity-100">Contact.</a>
                </div>
                <p className="text-white fontface-bold text-xs pt-10 pb-4 ">
                    We <span className="text-chocolate-600">Embed</span> customer experiences for your brand.
                </p>
                <div className="max-w-max">
                    <div className="">
                        <a href="mailto:hello@embeddesign.in" className="transition duration-500 ease-in-out flex items-center fontface-medium text-xs text-white hover:text-chocolate-600 hover:opacity-100 hover:text-xl">Mail us at hello@embeddesign.in 
                        <ArrowIcon className="ml-4 h-3"/></a>
                    </div>
                    <hr className=" mt-1 border-t-1"/>
                </div>
                <div className="flex items-baseline mt-8 justify-end pr-6">
                    <p className="text-chocolate-600 text-sm fontface-medium ">Follow us</p>
                    <div className="flex space-x-4 ml-4">
                        <a href="#"><InstagramIcon className="transition duration-500 ease-in-out w-8 fill-current text-white text-opacity-30 hover:text-chocolate-600" /></a>
                        <a href="#"><LinkedInIcon className="transition duration-500 ease-in-out w-8 fill-current text-white text-opacity-30 hover:text-chocolate-600" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex w-full bg-black">
            <div className="w-7/12">
                <p className="text-white md:text-base lg:text-xl xl:text-2xl fontface-bold md:text-center py-10 md:my-64 lg:my-72 xl:my-80">
                    We <span className="text-chocolate-600">Embed</span> customer experiences for your brand.
                </p>
            </div>
            <div className="w-5/12 py-16 flex flex-col justify-around md:pl-8 lg:pl-12 xl:pl-20 " style={{"backgroundColor": "rgba(255, 255, 255, 0.1)"}}>
                <div className="flex flex-col justify-between md:space-y-1 lg:space-y-2 xl:space-y-3">
                    <a href="#" className="transition duration-500 ease-in-out fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 hover:text-chocolate-600 hover:opacity-100">Work</a>
                    <a href="/story" className="transition duration-500 ease-in-out fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 hover:text-chocolate-600 hover:opacity-100">Our Story.</a>
                    <a href="/embedcast" className="transition duration-500 ease-in-out fontface-bold md:text-2xl xl:text-4xl text-white opacity-30 hover:text-chocolate-600 hover:opacity-100">EmbedCast</a>
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
                            <a target="_blank" href="https://www.instagram.com/embeddesign_/"><InstagramIcon className="transition duration-500 ease-in-out md:w-10 lg:w-12 fill-current text-white text-opacity-30 hover:text-chocolate-600" /></a>
                            <a target="_blank" href="https://www.linkedin.com/company/embed-design/"><LinkedInIcon className="transition duration-500 ease-in-out md:w-10 lg:w-12 fill-current text-white text-opacity-30 hover:text-chocolate-600" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;