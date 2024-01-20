// Set up for express
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./models/product");

main()
	.then(() => console.log("Mongo (mongoose) connection Open"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/products", async (req, res) => {
	const products = await Product.find({});
	console.log(products);
	res.render("products/index", { products });
});

app.post("/products", async (req, res) => {
	const newProduct = new Product(req.body);
	await newProduct.save();
	res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/new", (req, res) => {
	res.render("products/new");
});

app.get("/products/:id", async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);
	res.render(`products/show`, { product });
});

app.get("/products/:id/edit", async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);
	res.render("products/edit", { product });
});

app.put("/products/:id", async (req, res) => {
	const { id } = req.params;
	const product = await Product.findByIdAndUpdate(id, req.body, {
		runValidators: true,
		new: true,
	});
	console.log(req.body);
	res.redirect(`/products/${product._id}`);
});

app.listen(3000, () => {
	console.log("Listening on port 3000! (express)");
});
