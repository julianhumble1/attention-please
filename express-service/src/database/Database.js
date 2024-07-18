import mongoose from "mongoose";

export default class Database {
    #uri

    constructor(uri) {
        this.#uri = uri;
    }
    
    connect = async () => {
        try {
            await mongoose.connect(this.#uri);
            const db = mongoose.connection;

            // Listen for the 'connected' event
            db.on('connected', () => {
            console.log('Connected to the database successfully');
            });

            
            console.log(`Database connection to ${this.#uri} was successful`)
        } catch (e) {
            console.log(`Database connection error: ${e.message}`)
        }
    }

    close = async () => {
        await mongoose.disconnect();
    }
}