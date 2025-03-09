import express from "express";
import {router} from "./router/user.js";

const app = express();

app.use(express.json())
app.use('/user', router);

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});