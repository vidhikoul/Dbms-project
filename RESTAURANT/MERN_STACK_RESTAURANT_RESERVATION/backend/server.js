import app from "./app.js";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js"; // Update the path accordingly

dotenv.config();
dotenv.config();
dbConnection();
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);


app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
