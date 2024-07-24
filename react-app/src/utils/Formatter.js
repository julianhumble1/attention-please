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

    static formatDependencies = (array) => {
        const formattedDependencies = array.replace("[", "").replace("]", "")
        return formattedDependencies
    }

    static formatMultipleModalities = (modalitiesString) => {
        if (modalitiesString) {
            return modalitiesString
                .split(',')
                .map(word => word.trim().charAt(0).toUpperCase() + word.trim().slice(1))
                .join(', ');
        } else {
            return ""
        }
    }

}