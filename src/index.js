import express from "express";
import {router} from "./routes/user.js";
import { ErrorMiddleware } from "./middleware/errorMiddleware.js";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, '../static');
console.log(staticPath);

app.use(express.json());
app.use(express.static(staticPath));
app.use('/file',express.static(staticPath)); // contoh untuk mendapatkan static file tapi menggunkan url path /file contoh: http://localhost:3000/file/hallo.txt

app.use('/user', router);

app.use(ErrorMiddleware); // ini harus di letakan di paling akhir

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});