import express from "express";
import {router} from "./routes/user.js";
import { ErrorMiddleware } from "./middleware/errorMiddleware.js";
import { __dirname } from "./helper/directoryPath.js";
import expressFileUpload from "express-fileupload";

const app = express();
const staticPath = __dirname + '/static';

app.use(express.json());
app.use(expressFileUpload()) // middleware untuk handle file upload
app.use(express.static(staticPath));
app.use('/file',express.static(staticPath)); // contoh untuk mendapatkan static file tapi menggunkan url path /file contoh: http://localhost:3000/file/hallo.txt

app.use('/user', router);

// lakukan hal ini jika ingin membuat custom response untuk url not found, 
// code ini harus berada di akhir route
app.use((req,res,next) => {
    res.status(404)
    .json({
        message: "Halaman tidak ada"
    })
})

app.use(ErrorMiddleware); // ini harus di letakan di paling akhir

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});