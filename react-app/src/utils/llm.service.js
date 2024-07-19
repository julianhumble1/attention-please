import axios from "axios";

export const getModels = async () => {
    try {
        const modelRes = await axios.get(`http://localhost:3000/llm`);
        return modelRes;
    } catch (e) {
        return e;
    }
};

export const getModelById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/llm/single?id=${id}`)
        return response.data
    } catch (e) {
        throw new Error(e.message)
    }
}