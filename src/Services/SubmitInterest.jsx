import axios from "axios";

const SubmitInterest = {
    sendDetails: async (clientDetails, setIsLoading, setSuccessful) => {
        setIsLoading(true); 
        try {
            const bearer_token = process.env.REACT_APP_API_TOKEN;
            const remote_api_url_post = process.env.REACT_APP_REMOTE_API_URL_POST;
            const token = bearer_token ? bearer_token : null;
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response = await axios.post(`${remote_api_url_post}`, { client_detail: clientDetails }, { headers });
            const { data } = response;
            if (data) {
                setSuccessful(true)
                alert("Thank you for sending your interest! We will respond to you as soon as possible.");
            }
        } catch (error) {
            setSuccessful(false);
            if (error.response && error.response.data) {
                const errorMessages = error.response.data;
                const formattedErrors = Object.entries(errorMessages)
                    .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
                    .join("\n");
                
                alert(`Submission failed:\n${formattedErrors}`);
            } else {
                alert("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    },


    getDetails: async () => {
        let isLoading = true;

        try {
            const bearer_token = process.env.REACT_APP_API_TOKEN;
            const remote_api_url_get = process.env.REACT_APP_REMOTE_API_URL_GET;
            const token = bearer_token ? bearer_token : null;
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const resp = await axios.get({remote_api_url_get}, { headers });
            const { data } = resp;
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