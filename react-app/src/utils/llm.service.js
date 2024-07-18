import axios from "axios";

export const getModels = async () => {
    try {
        const modelRes = await axios.get(`http://localhost:3000/`);
        console.log(modelRes)
        return modelRes;
    } catch (e) {
        return e;
    }
};