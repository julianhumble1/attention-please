import axios from "axios";
import Formatter from "../utils/Formatter.js";

export const getModels = async () => {
    try {
        const modelRes = await axios.get(`http://localhost:3000/llm`);
        modelRes.data.map((modelData) => {
            Formatter.formatModality(modelData)
        })
        return modelRes;
    } catch (e) {
        return e;
    }
};

export const getModelById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/llm/single?id=${id}`)
        response.data = Formatter.formatModality(response.data)
        return response.data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const updateModel = async (llmId, token, userID, type, name, organization, description, created_date, size, size_int, modality, access, license, dependencies) => {
    try {
        const response = await axios.patch(`http://localhost:3000/llm/update?id=${llmId}`, {
            userID: userID,
            type: type, 
            name: name,
            organization: organization,
            description: description,
            created_date: created_date,
            size: size,
            size_int: size_int,
            modality: modality,
            access: access,
            license: license,
            dependencies: dependencies
        }, {
            headers: {
                "x-access-token": token
            }
        })
        return response
    } catch (e) {
        throw new Error(e.message)
    }
}