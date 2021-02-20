import ArrowIcon from '../../assets/Icons/ArrowIcon.svg';
import InstagramIcon from '../../assets/Icons/instagram.svg';
import LinkedInIcon from '../../assets/Icons/linkedin.svg';

const Footer = () => {
    return (
        <div className="w-full flex bg-black mt-20">
            <div className="w-7/12">
                <p className="text-white text-3xl fontface-bold text-center py-10 my-96">
                    We <span className="text-chocolate-600">Embed</span> customer experiences for your brand.
                </p>
            </div>
            <div className="w-5/12 py-16 flex flex-col justify-around pl-28" style={{"backgroundColor": "rgba(255, 255, 255, 0.1)"}}>
                <div className="flex flex-col justify-between space-y-4">
                    <a href="#" className="fontface-bold text-5xl text-white opacity-30">Work</a>
                    <a href="#" className="fontface-bold text-5xl text-white opacity-30">Story.</a>
                    <a href="#" className="fontface-bold text-5xl text-white opacity-30">EmbedCast <span className="text-xl">(Coming Soon)</span></a>
                    <a href="#" className="fontface-bold text-5xl text-white opacity-30">Contact.</a>
                </div>
                <div className="mt-12">
                    <div className="max-w-max">
                        <div className="">
                            <a href="mailto:hello@embeddesign.in" className="flex items-center fontface-medium text-lg text-white opacity-30">Mail us at hello@embeddesign.in 
                            <ArrowIcon className="ml-8 h-5"/></a>
                        </div>
                        <hr className="opacity-30 mt-2 border-t-2"/>
                    </div>
                    <div>
                        <p className="text-chocolate-600 text-2xl fontface-medium mt-8 ">Follow us</p>
                        <div className="flex space-x-6 mt-8 ml-4">
                            <a href="#"><InstagramIcon className="w-12" /></a>
                            <a href="#"><LinkedInIcon className="w-12" /></a>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Footer;