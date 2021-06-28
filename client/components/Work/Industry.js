import Container from "../layout/Container";

const Work_industry = ()=>{
    return(
        <Container>
        <div className="items-center">
                <h1 className="pt-8 pb-8 text-center fontface-medium text-1xl md:text-2xl xl:text-3xl" > We have touched the following Industries with our work</h1>
                                           
                        <section className="pl-20 mx-4 p-10 items-center align-middle">
                            <div className="flex flex-wrap items-center align-middle ">
                                <div className="sm:w-1/3 md:w-1/3 px-4 lg:w-1/6 items-center align-middle">  <img className="rounded w-5/12" src="/assets/industrylogos/Ind_Ecommerce.svg" alt="E-Commerce"/><h3 className="align-center">Ecommerce</h3></div>
                                <div className="sm:w-1/3 md:w-1/3 px-4 lg:w-1/6 items-center align-middle">  <img className="rounded w-5/12" src="/assets/industrylogos/Ind_Ed-Tech.svg" alt="Ed-Tech "/><h3>Ed Tech</h3></div>
                                <div className="sm:w-1/3 md:w-1/3 px-4 lg:w-1/6 items-center align-middle">  <img className="rounded w-5/12" src="/assets/industrylogos/Ind_Elder-Tech.svg" alt=" Elder-Tech "/><h3>Elder Tech</h3></div>
                                <div className="sm:w-1/3 md:w-1/3 px-4 lg:w-1/6 items-center align-middle">  <img className="rounded w-5/12" src="/assets/industrylogos/Ind_Finance.svg" alt="Finance"/><h3>Finance</h3></div>
                                <div className="sm:w-1/3 md:w-1/3 px-4 lg:w-1/6 items-center align-middle">  <img className="rounded w-5/12" src="/assets/industrylogos/Ind_Healthcare.svg" alt=" Healthcare "/><h3>Healthcare</h3> </div>
                                <div className="sm:w-1/3 md:w-1/3 px-4 lg:w-1/6 items-center align-middle">  <img className="rounded w-5/12" src="/assets/industrylogos/Ind_Publishing.svg" alt=" Publishing "/><h>Publishing</h></div>

                            </div>
                        </section>
                        </div>
        </Container>
    ) 
}

export default Work_industry;