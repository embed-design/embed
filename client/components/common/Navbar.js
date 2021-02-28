import Container from '../layout/Container';
import BurgerIcon from '../../assets/Icons/BurgerIcon.svg'
import CrossIcon from '../../assets/Icons/Cross.svg'
import { useState } from 'react';
import { useRouter } from 'next/router';
import useComponentVisible from '../../hooks/useComponentVisible';

const Navbar = ( {darkMode = true} ) => {
    // TODO The hover state should not be active while the animation is going on. 
    const router = useRouter();
    const [navAnim, setNavAnim] = useState(false)

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const openNav = () => {
        setNavAnim(!navAnim);
        // setIsComponentVisible(true)
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

                <div  ref={ref} className={`flex lg:hidden items-start`} >
                    { isComponentVisible &&
                        <div className={`absolute z-10 p-6 right-10 rounded-md bg-gray-800 flex flex-col space-y-2 text-xl`}>
                            <a href="/work" className="fontface-bold text-white">Work</a>
                            <a href="/story" className="fontface-bold text-white">Our Story.</a>
                            <a href="/embedcast" className="fontface-bold text-white">EmbedCast</a>
                            <a onClick={executeScroll} className="cursor-pointer fontface-bold text-white">Contact.</a>
                        </div>
                    }
                    {!isComponentVisible && (
                        <button type="button" onClick={() => setIsComponentVisible(true)} className="bg-transparent border-none outline-none focus:outline-none">
                            <BurgerIcon className={`w-6 xl:w-8 fill-current ${darkMode ? "text-white" : "text-black"}`}/>
                        </button>
                    )}
                    
                </div>
                
                <div className="hidden lg:flex items-center">
                    <div id="nav-list" className={`${navAnim ? "flex" : "transition delay-75 hidden" } items-center space-x-8 mr-8`}>
                        <a href="/work" onAnimationEnd={(e) => e.target.classList.add("hover:text-chocolate-600")} className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl`}>Work</a>
                        <a href="/story" onAnimationEnd={(e) => e.target.classList.add("hover:text-chocolate-600")} className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl`}>Our Story.</a>
                        <a href="/embedcast" onAnimationEnd={(e) => e.target.classList.add("hover:text-chocolate-600")} className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl`}>EmbedCast</a>
                        <a onClick={executeScroll} onAnimationEnd={(e) => e.target.classList.add("hover:text-chocolate-600")} className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-white" : "text-black"} fontface-medium text-xl  cursor-pointer`}>Contact.</a>
                    </div>
                    <button type="button" onClick={openNav} className={`bg-transparent border-none outline-none focus:outline-none`}>
                        { !navAnim ?
                            <BurgerIcon className={`w-6 xl:w-8 fill-current ${darkMode ? "text-white" : "text-black"}`}/>
                            : <CrossIcon className={`w-6 xl:w-8 fill-current ${darkMode ? "text-white" : "text-black"}`}/> }
                    </button>
                </div>
                
            </div>
        </Container>
    )
}

export default Navbar;