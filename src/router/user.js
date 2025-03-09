import express from "express"

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        name:"budi siregar"
    });
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

export {
    router
}