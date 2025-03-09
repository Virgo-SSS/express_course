import express from "express";
import {router} from "./routes/user.js";
import { ErrorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json())
app.use('/user', router);

app.use(ErrorMiddleware); // ini harus di letakan di paling akhir

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});