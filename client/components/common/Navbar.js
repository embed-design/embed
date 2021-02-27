import Container from '../layout/Container';
import BurgerIcon from '../../assets/Icons/BurgerIcon.svg'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
 
const Navbar = ( {darkMode = true} ) => {
    // TODO The hover state should not be active while the animation is going on. 
    const router = useRouter();
    const [navAnim, setNavAnim] = useState(false)

    const openNav = () => {
        setNavAnim(!navAnim);
    }

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
        <Container>
            <div className="flex justify-between items-start py-2 md:py-6 ">
                <a href="/" >{darkMode ? 
                   <img src="/logo/Logo.svg" alt="EmbedDesign" className=" w-36 md:w-48 lg:w-60" /> : <img src="/logo/Logo_Dark.svg" alt="EmbedDesign" className=" w-36 md:w-48 lg:w-60" />
                }</a>
                
                <div className="flex items-center">
                    <div id="nav-list" className={`${navAnim ? "flex" : "transition delay-75 hidden" } items-center space-x-8 mr-8`}>
                        <a href="/story" className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl hover:text-chocolate-600`}>Our Story</a>
                        <a href="/embedcast" className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl hover:text-chocolate-600`}>EmbedCast</a>
                        <a onClick={executeScroll} className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl hover:text-chocolate-600 cursor-pointer`}>Contact Us.</a>
                    </div>
                    <button type="button" onClick={openNav} className="bg-transparent border-none outline-none focus:outline-none">
                        <BurgerIcon className={`w-6 xl:w-8 fill-current ${darkMode ? "text-white" : "text-black"}`}/>
                    </button>
                </div>
                
            </div>
        </Container>
    )
}

export default Navbar;