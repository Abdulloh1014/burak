// Backend

import express from 'express';   // bu serverni quradi
import path from 'path';   // path (Windows, Linux, macOS) yo‘l formatlari farq qiladi —path moduli bu farqlarni avtomatik hisobga olib, har joyda to‘g‘ri ishlaydigan yo‘l yaratadi.
import router from "./router"
import routerAdmin from "./router-admin"
import morgan from "morgan";
import {MORGAN_FORMAT} from "./libs/config";

/**  1-ENTRANSE  **/
const app = express();

app.use(express.static(path.join(__dirname, "public")));   // `join()` — bir nechta yo‘l qismlarini (masalan, papka nomlari) bitta to‘liq yo‘lga birlashtiradi \\\ __dirname — joriy papka manzili  
app.use(express.urlencoded({extended: true}));    // urlencoded() — forma orqali kelgan ma’lumotlarni o‘qiydi  \\\ murakkab ma’lumotlarni ham o‘qishga imkon beradi  
app.use(express.json());   // IPA sifatida req bo'layotgan datalarni bodysida kelyotgan json datani o'tkazishga ruhsat beryabmiz
app.use(morgan(MORGAN_FORMAT));


/**  2-SESSION  **/

/**  3-VIEWS  **/
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**  4-ROUTERS  **/
app.use('/admin', routerAdmin) //for admin  // EJS
app.use('/', router)           //for user   // REACT // Middleware Design Pattern


export default app;