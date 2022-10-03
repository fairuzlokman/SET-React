import axios from "axios";

export const get = async (endpoint, body, options) => {
    try {
        const response = await axios.get(
        endpoint,
        body,
        options
        );
        return response;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}