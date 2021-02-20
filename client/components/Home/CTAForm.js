import Container from '../layout/Container';
import axios from 'axios';
import { useState } from 'react';
import _ from 'lodash';

const CTAForm = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [services, setServices] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name != "" && email != "" && phone != "" && message != "" && services.length > 0){
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
                        "value": services.join(';')
                    },
                ],
                "context": {
                    "pageUri": "localhost:3000",
                    "pageName": "Welcome to Embed Design"
                }
            })    
        } else {
            alert("Form incomplete");
        }
    }

    const handleChange = (e) => {
        let serviceList = services;
        e.target.checked ? serviceList.push(e.target.value) : _.remove(serviceList, (service) => service === e.target.value);
        console.log(serviceList);
        setServices(serviceList);
    }

    return (
        <Container>
            <div className="mt-16">
                <h1 className="text-center fontface-medium text-7xl" >Tell us about yourself.</h1>
                <div className="w-10/12 bg-chocolate-600 mt-24 pt-16 pb-4 px-32 mx-auto">
                    <h4 className="text-white text-3xl fontface-medium">Let's create something together</h4>
                    <form name="cta-form" id="cta-form" name="cta-form" className="w-full my-8" method="post" onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Name" className="embed__input fontface-medium text-base leading-none" required/>
                        </label>
                        <label htmlFor="company">
                            <input type="text" name="company" value={company} onChange={e => setCompany(e.target.value)} id="company" placeholder="Company (Optional)" className="embed__input fontface-medium text-base leading-none" />
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label htmlFor="email">
                                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Email Address" className="embed__input fontface-medium text-base leading-none" required/>
                            </label>
                            <label htmlFor="phone">
                                <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} id="phone" placeholder="Phone Number" className="embed__input fontface-medium text-base leading-none" required/>
                            </label>
                        </div>
                        <label htmlFor="message">
                            <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} id="message" placeholder="Message" className="embed__textarea fontface-medium text-base leading-none" required/>
                        </label>
                        {/* <label htmlFor="contact">
                            <select name="services" id="services" placeholder="Services" className="embed__input fontface-medium text-base leading-none">
                                <option value="" disabled selected>Select a service</option>
                                <option value="ur">User Research</option>
                                <option value="ux">User Experience</option>
                                <option value="ui">User Interface</option>
                            </select>
                        </label> */}
                        <h5 className="text-white text-xl fontface-medium">Services</h5>
                        <ul>
                            <li>
                                <label htmlFor="ur">
                                <input type="checkbox" name="services" id="ur" onChange={handleChange} value="ur"/>
                                User Research</label>
                            </li>
                            <li>
                                <label htmlFor="ux">
                                <input type="checkbox" name="services" id="ux" onChange={handleChange} value="ux"/>
                                User Experience</label>
                            </li>
                            <li>
                                <label htmlFor="ui">
                                <input type="checkbox" name="services" id="ui" onChange={handleChange} value="ui"/>
                                User Interface</label>
                            </li>
                        </ul>
                        <input type="hidden" name="Services" value={services} id="services"/>
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