const Store = require("../models/store");

//req lo que llegó del api, res lo que va a responder 
const registerStore = async (req, res) =>{
    if(!req.body.name || !req.body.direccion || !req.body.ciudad)
    return res.status(401).send("Process failed: Incomplete data");

    const existingStore = await Store.findOne({name: req.body.name});
    if (existingStore) return res.status(401).send("Process failed: Store already exist");

    const store = new Store({
        name: req.body.name,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        dbStatus : true,
    });

    const result = await store.save();
    if(!result) return res.status(401).send("Failed to register store");
    return res.status(200).send({ store });

};

const listStore= async(req, res) =>{
    const store = await Store.find()
    if(!store) return res.status(401).send("No Store")
    return res.status(200).send({store})
};

module.exports = {registerStore, listStore};