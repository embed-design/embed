import Container from '../layout/Container';

const Services = () => {
    return (

        <Container>
            <div className="mt-32 md:mt-32 lg:mt-24 xl:mt-44 xl:w-full mx-auto">
                <h1 className="text-center fontface-medium text-3xl md:text-5xl xl:text-7xl" >Our Services</h1>
                <h3 className="text-center fontface-light mt-10 md:mt-16 lg:mt-20 xl:mt-20 text-3xl md:text-5xl xl:text-7xl" >What do we do best?</h3>
                <div id="service_list" className="mt-6 md:mt-24 lg:mt-20 xl:mt-32 mb-16 xl:mb-20 grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-8 md:gap-20 lg:gap-2">
                    <div id="user_research" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_research.svg" alt="user_research" className="w-7/12 md:w-5/12 lg:w-9/12 xl:w-8/12 h-60"/>
                        <div>
                            <p className="fontface-medium text-lg md:text-2xl lg:text-lg xl:text-2xl text-center mb-4 xl:mb-10">User Research</p>
                            <p className="fontface-light text-lg md:text-2xl lg:text-lg xl:text-2xl text-center leading-relaxed w-8/12 mx-auto">We understand your customers.</p>
                        </div>
                    </div>
                    <div id="user_experience" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_experience.svg" alt="user_experience" className="w-7/12 md:w-5/12 lg:w-9/12 xl:w-8/12 h-60"/>
                        <div>
                            <p className="fontface-medium text-lg md:text-2xl lg:text-lg xl:text-2xl text-center mb-4 xl:mb-10">User Experience</p>
                            <p className="fontface-light text-lg md:text-2xl lg:text-lg xl:text-2xl text-center leading-relaxed w-8/12 mx-auto">We curate a strategy for your customers.</p>
                        </div>
                    </div>
                    <div id="user_interface" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_interface.svg" alt="user_interface" className="w-7/12 md:w-5/12 lg:w-9/12 xl:w-8/12 h-60"/>
                        <div>
                            <p className="fontface-medium text-lg md:text-2xl lg:text-lg xl:text-2xl text-center mb-4 xl:mb-10">User Interface</p>
                            <p className="fontface-light text-lg md:text-2xl lg:text-lg xl:text-2xl text-center leading-relaxed w-9/12 mx-auto">We shape interactions for your customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services;