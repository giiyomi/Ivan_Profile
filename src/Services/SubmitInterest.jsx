import axios from "axios";
import { LOCAL_API_URL } from "../Constants/remoteConstants";

const SubmitInterest = {
    sendDetails: async (clientDetails) => {
        try {
            const remote_api_url = process.env.REACT_APP_REMOTE_API_URL
            const bearer_token = process.env.REACT_APP_API_TOKEN;
            const token = bearer_token? bearer_token : null
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            console.log(remote_api_url)
            console.log(bearer_token)
            // console.log(headers)
            // console.log(clientDetails)
            const response = await axios.post({remote_api_url}, {client_detail: clientDetails}, { headers })
            const {data} = response
            // console.log(data)
            if(data){
                return alert("Your interest is submitted.");
            }
        } catch (error) {
            if (error.response) {
                // console.log(error.response)
                alert("Please submit your details again.");
            }
        }
    },


    getDetails: async () => {
        let isLoading = true;

        try {
            const bearer_token = process.env.REACT_APP_API_TOKEN;
            const token = bearer_token ? bearer_token : null;
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            console.log(headers);

            const resp = await axios.get({LOCAL_API_URL}, { headers });
            const { data } = resp;

            console.log(data);
            isLoading = false;

            return data;
        } catch (error) {
            isLoading = false;
            console.log(error.response);
            console.log(error.request)
            console.log(error.message)
            alert("Error in fetching details.");
        } finally {
            console.log(isLoading ? "Loading..." : "Finished");
        }
    }
}

export default SubmitInterest