const Product = require("../models/Product");

// Add Product
const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            image,
            stock,
        } = req.body;

        const product = await Product.create({
            name,
            description,
            price,
            category,
            image,
            stock,
        });

        res.status(201).json({
            message: "Product Added Successfully",
            product,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    addProduct,
    getProducts,
};