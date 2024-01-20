// Set up for express
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

main()
	.then(() => console.log("Mongo (mongoose) connection Open"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
	const products = await Product.find({});
	console.log(products);
	res.render("products/index", { products });
});

app.listen(3000, () => {
	console.log("Listening on port 3000! (express)");
});
