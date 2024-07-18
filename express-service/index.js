import Config from "./src/config/Config.js";
import Database from "./src/database/Database.js";
import UserRoutes from "./src/routes/User.routes.js";
import LLMRoutes from "./src/routes/LLM.routes.js";
import Server from "./src/server/Server.js";

Config.load()
const { PORT, HOST, DB_URI } = process.env

const userRoutes = new UserRoutes()
const llmRoutes = new LLMRoutes();

const database = new Database(DB_URI)
database.connect();

const server = new Server(PORT, HOST, userRoutes, llmRoutes)
server.start()