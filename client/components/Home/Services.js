import Container from '../layout/Container';

const Services = () => {
    return (

        <Container>
            <div className="mt-24 lg:mt-28 xl:mt-52 xl:w-full mx-auto">
                <h1 className="text-center fontface-medium text-3xl md:text-5xl xl:text-7xl" >Our Services</h1>
                <h3 className="text-center fontface-light mt-10 xl:mt-20 text-3xl md:text-5xl xl:text-7xl" >What do we do best?</h3>
                <div id="service_list" className="mt-6 md:mt-24 xl:mt-32 mb-16 grid grid-rows-3 xl:grid-rows-none xl:grid-cols-3 gap-12 xl:gap-2">
                    <div id="user_research" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_research.svg" alt="user_research" className="w-7/12 md:w-5/12 lg:w-4/12 xl:w-8/12 h-60"/>
                        <div>
                            <p className="fontface-medium text-xl md:text-2xl xl:text-2xl text-center mt-4 mb-4 xl:mb-10">User Research</p>
                            <p className="fontface-light text-xl md:text-2xl xl:text-2xl text-center leading-relaxed w-8/12 mx-auto">We understand your customers.</p>
                        </div>
                    </div>
                    <div id="user_experience" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_experience.svg" alt="user_experience" className="w-7/12 md:w-5/12 lg:w-4/12 xl:w-8/12 h-60"/>
                        <div>
                            <p className="fontface-medium text-xl md:text-2xl xl:text-2xl text-center mt-4  mb-4 xl:mb-10">User Experience</p>
                            <p className="fontface-light text-xl md:text-2xl xl:text-2xl text-center leading-relaxed w-8/12 mx-auto">We curate a strategy for your customers.</p>
                        </div>
                    </div>
                    <div id="user_interface" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_interface.svg" alt="user_interface" className="w-7/12 md:w-5/12 lg:w-4/12 xl:w-8/12 h-60"/>
                        <div>
                            <p className="fontface-medium text-xl md:text-2xl xl:text-2xl text-center mt-4  mb-4 xl:mb-10">User Interface</p>
                            <p className="fontface-light text-xl md:text-2xl xl:text-2xl text-center leading-relaxed w-9/12 mx-auto">We shape interactions for your customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services;