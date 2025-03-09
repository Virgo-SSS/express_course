import express from "express"
import { __dirname } from "../helper/directoryPath.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        name:"budi siregar"
    });
});

router.get('/test-error', (req, res) => {
    throw new Error("User sedang error");
    
});

router.get('/:id', (req, res) => {
    let userId = req.params.id;
    res.status(200).send({
        id: userId,
        name: "Joko"
    });

});

router.post('/', (req, res) => {
    let name = req.body.name;

    res.status(200).send({
        name
    });
});

router.delete('/', (req, res) => {
    res.status(200).json({
        message: "Successfully delete user"
    })
});

router.post('/update-gambar', async (req, res) => {
    try {
        let file = req.files.profile;
        console.log(file.name);
        await file.mv(__dirname + '/storages/' + file.name);

        res.status(200)
        .json({
            message: "Successfully update gambar"
        });
    } catch (error) {
        throw new Error(error.message)
        
    }
});

export {
    router
}