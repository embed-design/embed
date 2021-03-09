import axios from 'axios';

export default async (req, res) => {
    const { method, body } = req;

    switch (method) {
        case "GET": 
            {
                res.status(405).json({ message: "Request failed." });
            }
            break;
        case "POST": {
            const result = await axios.post(
                "https://api.hsforms.com/submissions/v3/integration/submit/9453557/8fbe3309-1042-47a3-b071-23cb87492282",
                {
                    ...body
                },
            );
            if (result && result.data) {
                res.status(200).json(result.data);
            } else {
                res.status(500).json({ message: "Request failed." });
            }
        }
        break;
        default: {
            res.status(405).json({ message: "Request failed." });
        }
    }
};