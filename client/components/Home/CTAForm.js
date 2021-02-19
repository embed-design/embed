import Container from '../layout/Container';

const CTAForm = () => {
    return (
        <Container>
            <div className="mt-16">
                <h1 className="text-center fontface-medium text-7xl" >Tell us about yourself.</h1>
                <div className="w-10/12 bg-chocolate-600 mt-24 pt-16 pb-4 px-32 mx-auto">
                    <h4 className="text-white text-3xl fontface-medium">Let's create something together</h4>
                    <form id="cta-form" name="cta-form" className="w-full my-8">
                        <label htmlFor="name">
                            <input type="text" name="name" id="name" placeholder="Name" className="embed__input fontface-medium text-base leading-none" />
                        </label>
                        <label htmlFor="company">
                            <input type="text" name="company" id="company" placeholder="Company (Optional)" className="embed__input fontface-medium text-base leading-none" />
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label htmlFor="email">
                                <input type="email" name="email" id="email" placeholder="Email Address" className="embed__input fontface-medium text-base leading-none" />
                            </label>
                            <label htmlFor="contact">
                                <input type="text" name="contact" id="contact" placeholder="Phone Number" className="embed__input fontface-medium text-base leading-none" />
                            </label>
                        </div>
                        <label htmlFor="message">
                            <textarea name="message" id="message" placeholder="Message" className="embed__textarea fontface-medium text-base leading-none" />
                        </label>
                        <label htmlFor="contact">
                            <select name="services" id="services" placeholder="Services" className="embed__input fontface-medium text-base leading-none">
                                <option value="" disabled selected>Select a service</option>
                                <option value="ur">User Research</option>
                                <option value="ux">User Experience</option>
                                <option value="ui">User Interface</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className="my-16 flex justify-center">
                    <button type="submit" form="cta-form" className="embed__cta_button fontface-medium mx-auto">Get Embedded</button>
                </div>
            </div>
        </Container>
    )
}

export default CTAForm;