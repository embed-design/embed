import Container from '../layout/Container';
import BurgerIcon from '../../assets/Icons/BurgerIcon.svg'
import { useState } from 'react';
 
const Navbar = ( {darkMode = false} ) => {

    const [navAnim, setNavAnim] = useState(false)

    const openNav = () => {
        setNavAnim(!navAnim);
    }

    return (
        <Container>
            <div className="flex justify-between items-start py-2 md:py-6 ">
                {darkMode ? 
                   <img src="/logo/Logo_Dark.svg" alt="EmbedDesign" className=" w-36 md:w-48 lg:w-60" /> : <img src="/logo/Logo.svg" alt="EmbedDesign" className=" w-36 md:w-48 lg:w-60" />
                }
                
                <div className="flex items-center">
                    <div id="nav-list" className={`${navAnim ? "flex" : "transition delay-75 hidden" } items-center space-x-8 mr-8`}>
                        <a href="#" className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-black" : "text-white"} fontface-medium text-xl hover:text-chocolate-600`}>Our Story</a>
                        <a href="#" className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-black" : "text-white"} fontface-medium text-xl hover:text-chocolate-600`}>EmbedCast</a>
                        <a href="#" className={`${navAnim ? "animate-nav_in" : "animate-nav_out"} transition duration-500 ease-in-out ${darkMode ? "text-black" : "text-white"} fontface-medium text-xl hover:text-chocolate-600`}>Contact Us.</a>
                    </div>
                    <button type="button" onClick={openNav} className="bg-transparent border-none outline-none focus:outline-none">
                        <BurgerIcon className={`w-6 xl:w-8 fill-current ${darkMode ? "text-black" : "text-white"}`}/>
                    </button>
                </div>
                
            </div>
        </Container>
    )
}

export default Navbar;