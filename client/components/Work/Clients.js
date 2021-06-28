import Container from "../layout/Container";

const Work_clients = ()=>{
    return(
        <Container>
        <div className="bg-gray-50  items-center">
                <h1 className="pt-8 pb-8 text-center fontface-medium text-3xl md:text-5xl xl:text-7xl" >Our Clients</h1>
                                           
                        <section className="px-10 sm:pl-10">
                            <div className="flex flex-wrap items-center mx-12 pb-10">
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4 "> <a target="_blank" href= 'https://open.spotify.com/show/6y40cKHBd01Bx7T33R5ROd?si=VyPe_8oRSSK6hNqkrkND3A'> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_ads.svg" alt="Avantika Designeering Series "/></a></div>
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4"> <a target="_blank" href= 'https://www.instagram.com/bamboo_weaves/'> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_bambooweaves.svg" alt="Bamboo Weaves"/></a></div>
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4"> <a target="_blank" href= 'https://www.linkedin.com/company/eldrindia/?originalSubdomain=in'> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_eldr.svg" alt="Eldr"/></a></div>
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4"> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_invctus.svg" alt="Invctus"/></div>
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4"> <a target="_blank" href= 'https://www.facebook.com/MSMFoundationindia/'> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_msmf.svg" alt="Mazumdar Shaw Medical Foundation"/></a></div>
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4"> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_pashudhan.svg" alt="Pashudhan"/></div>
                                <div className="sm:w-1/2 md:w-1/3 px-4 lg:w-1/4"> <a target="_blank" href= 'https://www.zostel.com/'> <img className="rounded w-8/12 sm:w-7/12" src="/assets/clientlogos/client_zostel.svg" alt="Zostel"/></a></div>

                            </div>
                        </section>
                        </div>
        </Container>
    ) 
}

export default Work_clients;