import axios from "axios";

export default async (req, res) => {
    const { method, body } = req;
    
    switch (method) {
        case "GET":  {
            res.status(405).json({ message: "Request failed." });
        }
        break;

        case "POST": {
            let params = new URLSearchParams();

            for(var key in body){
                params.append(key, body[key]);
            }

            const result = await axios.post("https://www.google.com/recaptcha/api/siteverify", params,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            if (result && result.data) {
                res.status(200).json(result.data);
            } else {
                res.status(500).json({ message: "Request failed." });
            }
        }break;
        
        default: {
            res.status(405).json({ message: "Request failed." });
        }
    }
}