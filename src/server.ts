// Architectural pattern: MVC, Dependency Injection, MVP
// Backendni suyagi, backendagi ma'lumotlar oqimini tartibga soladigan vosita. ya'ni arxitektura

// MVC = MODEL VIEW CONTROLLER

// Design pattern: Middlawere, Decoratos
// Backendni ma'lum bir bo'laklarini structursini yechishda xizmat qiladigan pattern

// CLUSTER => DATABSE => COLLECTION => DOCUMENT


import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import app from "./app";   // app ni ya'ni express() ni chaqiryabmiz

mongoose
  .connect(process.env.MONGO_URL as string, {})
   .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
        console.log(`The server is running succesfully on port: ${PORT}`);
    });
   })
   
   .catch((err) => console.log("ERROR on connection MongoDB", err))
