import Container from '../layout/Container';
import BurgerIcon from '../../assets/Icons/BurgerIcon.svg'

const Navbar = () => {
    return (
        <Container>
            <div className="flex justify-between items-start py-2 md:py-6 ">
                <img src="/logo/Logo.svg" alt="EmbedDesign" className=" w-36 md:w-48 lg:w-60" />
                <button type="button" className="bg-transparent border-none">
                    <BurgerIcon className="w-6 xl:w-8 "/>
                </button>
            </div>
        </Container>
    )
}

export default Navbar;