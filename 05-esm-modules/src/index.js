//especificar a extensçao do arquivo
import connectToDatabase from "./utils/database.js";

//exportando tudo do modulo
import * as database from "./utils/database.js"

//import somente do que precisa
import { disconnectDatabase } from "./utils/database.js";

//import - export default
connectToDatabase("my-database");

//import * - export
database.disconnectDatabase();

//import apenas do que precisa
disconnectDatabase();

// export direct
import * as api from "./utils/api.js"
api.getDataFromApi();