export default class Formatter {

    static formatModality = (modelData) => {
        const modalities = modelData.modality;
        const modalityArray = modalities.split(";")
        const inputModality = modalityArray[0]
        const outputModality = modalityArray[1]
        modelData.input = inputModality;
        modelData.output = outputModality;
        return modelData;

    }

}