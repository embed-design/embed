import Container from '../layout/Container';

const Story_Content = () => {
    return (
        <div className="mb-12 md:mb-16 lg:mb-32 xl:mb-40">
        <Container>
        <div className="mt-4 md:mt-8 lg:mt-20 w-11/12 md:w-10/12 xl:w-9/12 mx-auto">
            <div className={`story_container md:story_container_md lg:story_container_lg xl:story_container_xl pl-10 pr-2 md:pl-16 md:pr-0 lg:pl-24 lg:pr-8 xl:pl-32 xl:pr-20 py-4 relative`}>
                <span className="fontface-medium text-xl md:text-2xl xl:text-3xl">How did it start?</span>
                <div className={`story_content md:story_content_md lg:story_content_lg xl:story_content_xl`} >
                    <p className="fontface-regular text-sm md:text-xs lg:text-base xl:text-xl md:leading-loose lg:leading-loose xl:leading-loose mt-10 lg:mt-16 ml-10">What happens when you put a researcher, who thinks deeper into things, a designer that translates thoughts into a plan, and a developer that executes them - together in a room? You will have ideas flying across the room, and lots of crazy conversations!</p>
                </div>
            </div>
            <div className={`story_container md:story_container_md lg:story_container_lg xl:story_container_xl pl-10 pr-2 md:pl-16 md:pr-2 lg:pl-24 lg:pr-8 xl:pl-32 xl:pr-20 py-4 mt-6 lg:mt-24 relative`}>
                <span className="fontface-medium text-xl md:text-2xl xl:text-3xl">Where are we now?</span>
                <div className={`story_content md:story_content_md lg:story_content_lg xl:story_content_xl`} >
                    <p className="fontface-regular text-sm md:text-xs lg:text-base xl:text-xl md:leading-loose lg:leading-loose xl:leading-loose mt-10 lg:mt-16 ml-10">We have come together to embed customer experiences that are UX and UI-centric. We talk a lot in terms of strategies and would love to help you build yours!</p>
                </div>
            </div>
        </div>
        </Container>
        </div>
    )
}

export default Story_Content;