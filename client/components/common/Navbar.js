import Container from '../layout/Container';
import BurgerIcon from '../../assets/Icons/BurgerIcon.svg'

const Navbar = () => {
    return (
        <Container>
            <div className="flex justify-between items-center">
                <img src="/logo/Logo.svg" alt="EmbedDesign" className=" w-48" />
                <button type="button" className="bg-transparent border-none">
                    <BurgerIcon className="w-8"/>
                </button>
            </div>
        </Container>
    )
}

export default Navbar;