# Overview
Crucial:
- Integration: Mongoose & Express
- Defining Model
- Products Index
- Products Detail
- CRUD
Nice to have:
- Filtering by Category

# 409. Express + Mongoose
- npm init -y
- npm i express ejs mongoose
- mkdir views

```js
// Set up for express
const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up for mongoose
const mongoose = require("mongoose");
main()
	.then(() => console.log("Mongo (mongoose) connection Open"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
}

app.get("/dog", (req, res) => {
	res.send(`Woof!`);
});

app.listen(3000, () => {
	console.log("Listening on port 3000! (express)");
});
```
