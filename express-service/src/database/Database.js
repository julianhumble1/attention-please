import mongoose from "mongoose";

export default class Database {
    #uri

    constructor(uri) {
        this.#uri = uri;
    }
    
    connect = async () => {
        try {
            await mongoose.connect(this.#uri);


            
            console.log(`Database connection to ${this.#uri} was successful`)
        } catch (e) {
            console.log(`Database connection error: ${e.message}`)
        }
    }

    close = async () => {
        await mongoose.disconnect();
    }
}