import Container from '../layout/Container';

const Services = () => {
    return (

        <Container>
            <div className="mt-24 lg:mt-28 xl:mt-52 xl:w-full 2xl:w-11/12 mx-auto">
                <h1 className="text-center fontface-medium text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl" >Our Services</h1>
                <h3 className="text-center fontface-light mt-10 xl:mt-20 2xl:mt-44 text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl " >What do we do best?</h3>
                <div id="service_list" className="mt-6 md:mt-24 xl:mt-32 2xl:mt-72 mb-16 2xl:mb-40 grid grid-rows-3 xl:grid-rows-none xl:grid-cols-3 gap-12 xl:gap-2 2xl:gap-28">
                    <div id="user_research" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_research.svg" alt="user_research" className="w-7/12 md:w-5/12 lg:w-4/12 xl:w-8/12 2xl:w-full h-60 2xl:h-96"/>
                        <div>
                            <p className="fontface-medium text-xl md:text-2xl xl:text-2xl 2xl:text-4xl text-center mt-4 2xl:mt-12  mb-4 xl:mb-10">User Research</p>
                            <p className="fontface-light text-xl md:text-2xl xl:text-2xl 2xl:text-4xl text-center leading-relaxed w-8/12 mx-auto">We understand your customers.</p>
                        </div>
                    </div>
                    <div id="user_experience" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_experience.svg" alt="user_experience" className="w-7/12 md:w-5/12 lg:w-4/12 xl:w-8/12 2xl:w-full h-60 2xl:h-96"/>
                        <div>
                            <p className="fontface-medium text-xl md:text-2xl xl:text-2xl 2xl:text-4xl text-center mt-4 2xl:mt-12  mb-4 xl:mb-10">User Experience</p>
                            <p className="fontface-light text-xl md:text-2xl xl:text-2xl 2xl:text-4xl text-center leading-relaxed w-8/12 mx-auto">We curate a strategy for your customers.</p>
                        </div>
                    </div>
                    <div id="user_interface" className="flex flex-col justify-center items-center">
                        <img src="/assets/user_interface.svg" alt="user_interface" className="w-7/12 md:w-5/12 lg:w-4/12 xl:w-8/12 2xl:w-full h-60 2xl:h-96"/>
                        <div>
                            <p className="fontface-medium text-xl md:text-2xl xl:text-2xl 2xl:text-4xl text-center mt-4 2xl:mt-12 mb-4 xl:mb-10">User Interface</p>
                            <p className="fontface-light text-xl md:text-2xl xl:text-2xl 2xl:text-4xl text-center leading-relaxed w-9/12 mx-auto">We shape interactions for your customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services;