
import axios from 'axios';
import { useState } from 'react';
import _ from 'lodash';
import { useCookies } from 'react-cookie';
import Loader from "../../assets/Icons/rolling.svg";

const CTAForm = ({ip}) => {

    const [cookies] = useCookies(["hubspotutk"])
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [services, setServices] = useState({
        'ur': false,
        'ux': false,
        'ui': false
    });
    const [isSubmitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        const serviceList = mapServicesToHSFormat()
        if(name != "" && email != "" && phone != "" && message != "" && serviceList.split(";").length > 0){
            axios.post("https://api.hsforms.com/submissions/v3/integration/submit/9453557/8fbe3309-1042-47a3-b071-23cb87492282", {
                "fields": [
                    {
                        "name": "firstname",
                        "value": name
                    },
                    {
                        "name": "company",
                        "value": company
                    },
                    {
                        "name": "email",
                        "value": email
                    },
                    {
                        "name": "phone",
                        "value": phone
                    },
                    {
                        "name": "message",
                        "value": message
                    },
                    {
                        "name": "services",
                        "value": serviceList
                    },
                ],
                "context": {
                    "hutk": cookies.hubspotutk,
                    "ipAddress": ip,
                    "pageUri": window.location.href,
                    "pageName": document.title
                }
            }).then(response => {
                setStatus("Thank you for submitting the form.")
                setTimeout(() => {
                    setStatus("")
                }, 3000);
            })    
            setCompany("");
            setEmail("");
            setMessage("");
            setName("");
            setPhone("");
            setServices({
                'ur': false,
                'ux': false,
                'ui': false
            });
            setSubmitting(false);
        } else {
            alert("Form incomplete");
        }
    }

    const handleChange = (e) => {
        let serviceList = services;
        setServices({...serviceList, [e.target.value]: !services[e.target.value]});
    }

    const mapServicesToHSFormat = () => {
        const serviceList = Object.keys(services).map((item) => {
            return services[item] ? item : null; 
        }).join(';');
        return serviceList;
    }

    return (
        <div id="contact-us" className="w-full xl:w-10/12 mx-auto mb-20 md:mb-44">
            <div className="w-10/12 mx-auto xl:w-full lg:my-16 xl:my-16">
                <h1 className="text-xl leading-snug tracking-wide md:leading-snug md:tracking-wide lg:leading-snug xl:leading-snug md:text-4xl lg:text-5xl xl:text-7xl fontface-light text-center">Want to discuss your business plans with us?</h1>
            </div>
            <div className="mt-16 xl:mt-32">
                <h1 className="w-10/12 md:w-7/12 mx-auto xl:w-full text-center fontface-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl" >Tell us about yourself.</h1>
                <div className="bg-chocolate-600 mt-10 w-full lg:w-10/12 xl:w-11/12 lg:mx-auto xl:mt-20 pt-10 xl:pt-16 pb-4 px-10 xl:px-32">
                    <h4 className="text-white text-xl xl:text-3xl fontface-medium">Let's create something together</h4>
                    <form name="cta-form" id="cta-form" name="cta-form" className="w-full my-8" method="post" onSubmit={handleSubmit}>
                        <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:gap-4">
                            <label htmlFor="name">
                                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Name" className="embed__input_mob lg:embed__input_lg fontface-regular text-base leading-none align-bottom" required/>
                            </label>
                            <label htmlFor="company">
                                <input type="text" name="company" value={company} onChange={e => setCompany(e.target.value)} id="company" placeholder="Company (Optional)" className="embed__input_mob lg:embed__input_lg fontface-regular leading-none align-bottom" />
                            </label>
                        </div>
                        <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:gap-4">
                            <label htmlFor="email">
                                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Email Address" className="embed__input_mob lg:embed__input_lg fontface-regular align-bottom" required/>
                            </label>
                            <label htmlFor="phone">
                                <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} id="phone" placeholder="Phone Number" className="embed__input_mob lg:embed__input_lg fontface-regular leading-none align-bottom" required/>
                            </label>
                        </div>
                        <label htmlFor="message">
                            <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} id="message" placeholder="Message" className="embed__textarea_mob lg:embed__textarea_lg  fontface-regular leading-none align-bottom" required/>
                        </label>
                        <div className="max-w-max my-4 ">
                            <h5 className="text-white text-lg xl:text-xl fontface-bold">Services Required</h5>
                        </div>                        
                        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-20 lg:justify-center ">
                            <label htmlFor="ur" className="container fontface-regular text-white" >User Research
                                <input type="checkbox" name="services" id="ur" onChange={handleChange} value="ur" checked={services.ur} />
                                <span className="checkmark"></span>
                            </label>
                            <label htmlFor="ux" className="container fontface-regular text-white">User Experience
                                <input type="checkbox" name="services" id="ux" onChange={handleChange} value="ux" checked={services.ux} />
                                <span className="checkmark" ></span>
                            </label>
                            <label htmlFor="ui" className="container fontface-regular text-white">User Interface
                                <input type="checkbox" name="services" id="ui" onChange={handleChange} value="ui"  checked={services.ui} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        {/* <div className="2xl:flex hidden flex-col lg:flex-row lg:space-x-20 lg:justify-center 2xl:justify-center ">
                            <label htmlFor="ur_1" className="container_2xl fontface-medium text-white" >User Research
                                <input type="checkbox" name="services" id="ur_1" onChange={handleChange} value="ur" />
                                <span className="checkmark_2xl"></span>
                            </label>
                            <label htmlFor="ux_1" className="container_2xl fontface-medium text-white">User Experience
                                <input type="checkbox" name="services" id="ux_1" onChange={handleChange} value="ux" />
                                <span className="checkmark_2xl" ></span>
                            </label>
                            <label htmlFor="ui_1" className="container_2xl fontface-medium text-white">User Interface
                                <input type="checkbox" name="services" id="ui_1" onChange={handleChange} value="ui" />
                                <span className="checkmark_2xl"></span>
                            </label>
                        </div> */}
                    </form>
                </div>
                <div className="w-10/12 md:w-11/12 lg:w-10/12 xl:w-11/12 mx-auto mt-5 md:mt-2">
                    <p className="fontface-medium text-gray-400 text-sm text-center md:text-left">Once we receive your requirements, we shall get back to you within a working day.</p>    
                </div>
                <div className="w-10/12 mx-auto my-5">
                    <p className="fontface-regular text-chocolate-600 text-xs text-center">{status}</p> 
                </div>
                <div className="my-16 flex justify-center">
                    <button type="submit" form="cta-form" className="embed__cta_button md:embed__cta_button_md fontface-medium mx-auto flex">
                    { isSubmitting ? (
                        <Loader className="animate-spin w-4 mr-2" />
                    ) : null} Get Embedded
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTAForm;