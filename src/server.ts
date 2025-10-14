// Architectural pattern: MVC, Dependency Injection, MVP
// Backendni suyagi, backendagi ma'lumotlar oqimini tartibga soladigan vosita. ya'ni arxitektura

// MVC = MODEL VIEW CONTROLLER

// Design pattern: Middlawere, Decoratos
// Backendni ma'lum bir bo'laklarini structursini yechishda xizmat qiladigan pattern

// CLUSTER => DATABSE => COLLECTION => DOCUMENT


import dotenv from 'dotenv';      // dotenv paketini chaqiradi (ya’ni loyihada .env fayl bilan ishlash imkonini beradi).
dotenv.config();   // .env fayldagi o‘zgaruvchilarni process.env ga yuklaydi. bu orqali maxfiy ma’lumotlarni kod ichiga yozmasdan ishlatiladi.

import mongoose from "mongoose";
import app from "./app";   // app ni ya'ni express() ni chaqiryabmiz

mongoose     // mongoDB ga ulab beradigon package
  .connect(process.env.MONGO_URL as string, {})      // .env faylga yozilgan MongoDB manzilini olib beryabti
                                                // ✅ Mongoose — kodni tartibli, xavfsiz va oson boshqariladigan qiladi.
                                                // ❌ To‘g‘ridan to‘g‘ri ulanish esa tezroq, lekin murakkabroq va xatolarga ochiqroq.
    .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {    // listen()- serverni ishga tushiradi. Ya’ni u berilgan portni eshitishni boshlaydi va shu portga keladigan so‘rovlarni qabul qiladi.
        console.log(`The server is running succesfully on port: ${PORT}`);
    });
   })
   
   .catch((err) => console.log("ERROR on connection MongoDB", err))

