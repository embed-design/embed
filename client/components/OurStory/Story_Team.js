import Container from '../layout/Container';
import LinkedInIcon from '../../assets/Icons/1200px-LinkedIn_logo_In-Black 1.svg'

const Story_Team = () => {
    return(
        <div className="mb-20 md:mb-44">
            <Container>
                <div className="md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 xl:gap-10 justify-center items-center">
                    <div className="md:col-start-1 md:col-end-3">
                        <img src="/assets/team/Arnav.png" alt="Arnav"/>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="fontface-regular text-sm xl:text-xl text-black">Arnav Agarwal</p>
                                {/* <p className="fontface-regular text-sm xl:text-xl text-gray-500">Co-founder</p> */}
                            </div>
                            <a target="_blank" href="https://www.linkedin.com/in/agarwalarnav"><LinkedInIcon className="w-4 h-4 xl:w-6 xl:h-6" /></a>
                        </div>
                    </div>
                    <div className="md:col-start-3 md:col-end-5">
                        <img src="/assets/team/Nikita.png" alt="Nikita"/>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="fontface-regular text-sm xl:text-xl text-black">Nikita Sharma</p>
                                {/* <p className="fontface-regular text-sm xl:text-xl text-gray-500">Co-founder</p> */}
                            </div>
                            <a target="_blank" href="https://www.linkedin.com/in/nikita-sharma-b6835b169/"><LinkedInIcon className="w-4 h-4 xl:w-6 xl:h-6" /></a>
                        </div>
                    </div>
                    <div className="md:col-start-5 md:col-end-7">
                        <img src="/assets/team/Rutal.png" alt="Rutal"/>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="fontface-regular text-sm xl:text-xl text-black">Rutal Deshmukh</p>
                                {/* <p className="fontface-regular text-sm xl:text-xl text-gray-500">Co-founder</p> */}
                            </div>
                            <a target="_blank" href="https://www.linkedin.com/in/rutaldeshmukh/"><LinkedInIcon className="w-4 h-4 xl:w-6 xl:h-6" /></a>
                        </div>
                    </div>
                    <div className="md:col-start-2 md:col-end-4 md:justify-center">
                        <img src="/assets/team/Madhura.png" alt="Madhura"/>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="fontface-regular text-sm xl:text-xl text-black">Madhura Pawar</p>
                                {/* <p className="fontface-regular text-sm xl:text-xl text-gray-500">Co-founder</p> */}
                            </div>
                            <a target="_blank" href="https://www.linkedin.com/in/madhura-pawar/"><LinkedInIcon className="w-4 h-4 xl:w-6 xl:h-6" /></a>
                        </div>
                    </div>
                    <div className="md:col-start-4 md:col-end-6 md:justify-center">
                        <img src="/assets/team/Aditya.png" alt="Aditya"/>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="fontface-regular text-sm xl:text-xl text-black">Aditya Oswal</p>
                                {/* <p className="fontface-regular text-sm xl:text-xl text-gray-500">Co-founder</p> */}
                            </div>
                            <a target="_blank" href="https://www.linkedin.com/in/oswaladitya/"><LinkedInIcon className="w-4 h-4 xl:w-6 xl:h-6" /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Story_Team;