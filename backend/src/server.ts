import App from "./app";
import Database from "./config/database";

const app = new App();
const database = new Database();

app.startserver();
database.initialiseDatabaseConnection();

