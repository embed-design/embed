import Container from '../layout/Container';

const Services = () => {
    return (

        <Container>
            <div className="mt-56">
                <h1 className="text-center fontface-medium text-7xl" >Our Services</h1>
                <h3 className="text-center fontface-light text-7xl mt-20" >What do we do best?</h3>
                <div id="service_list" className="my-32 grid grid-cols-3 gap-4">
                    <div id="user_research" className="flex flex-col justify-between items-center">
                        <img src="/assets/user_research.svg" alt="user_research" className="w-8/12"/>
                        <div>
                            <p className="fontface-medium text-3xl text-center mt-16 mb-10">User Research</p>
                            <p className="fontface-light text-3xl text-center leading-relaxed w-8/12 mx-auto">We understand your customers.</p>
                        </div>
                    </div>
                    <div id="user_experience" className="flex flex-col justify-between items-center">
                        <img src="/assets/user_experience.svg" alt="user_experience" className="w-8/12"/>
                        <div>
                            <p className="fontface-medium text-3xl text-center mt-16 mb-10">User Experience</p>
                            <p className="fontface-light text-3xl text-center leading-relaxed w-8/12 mx-auto">We curate a strategy for your customers.</p>
                        </div>
                    </div>
                    <div id="user_interface" className="flex flex-col justify-between items-center">
                        <img src="/assets/user_interface.svg" alt="user_interface" className="w-8/12"/>
                        <div>
                            <p className="fontface-medium text-3xl text-center mt-16 mb-10">User Interace</p>
                            <p className="fontface-light text-3xl text-center leading-relaxed w-8/12 mx-auto">We shape interactions for your customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services;