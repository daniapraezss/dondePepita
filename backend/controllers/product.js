const Product = require("../models/product");

//req lo que llegó del api, res lo que va a responder 
const registerProduct = async (req, res) =>{
    if(!req.body.name || !req.body.precio || !req.body.codigo || !req.body.descripcion)
    return res.status(401).send("Process failed: Incomplete data");

    const existingProduct = await Product.findOne({name: req.body.name});
    if (existingProduct) return res.status(401).send("Process failed: product already exist");

    const product = new Product({
        name: req.body.name,
        precio: req.body.precio,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        dbStatus : true,
    });

    const result = await product.save();
    if(!result) return res.status(401).send("Failed to register product");
    return res.status(200).send({ product });

};

const listProducts = async(req, res) =>{
    const product = await Product.find()
    if(!product) return res.status(401).send("No product")
    return res.status(200).send({product})
};

module.exports = {registerProduct, listProducts};