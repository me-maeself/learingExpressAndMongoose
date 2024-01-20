TODO learn about Export and Import and Path in a directory

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
Initializing the project:
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
# 410. Creating Models
- We create our models schema in different directory
  - We also need to export it.
- We can move the database logic to a new file called `seeds.js``
  - We need to import the models from the models directory
  - `const Product = require("./models/product");`
- About `insertMany()`
  - If one validation failed, all in the array would be invalidated as well

# 411. Create index.ejs (Indexing page)
- Changes to index.js where now contain mongoose logic
- Create route /products to index all
- Create index.ejs and indexing logic

# 412. Product details
- create show.ejs that show detailed product page
- add navigation anchor text from products to products/:id

# 413. Creating Product
- Making new.ejs
- Creating app.post route in index.js
  - It would create an instance of Product
  - Saving it to DB
  - No error handling yet

# 414. Updating Product
- /product/:id/edit
- Using app.put request
  - updating database
   ```js
  	const product = await Product.findByIdAndUpdate(id, req.body, {
		runValidators: true,
		new: true,
	});
  ```
- creation of edit.ejs
- redirect to show page after edit

# 415. Making selection option render dynamically
- add `categories` array in index.js
- passing `categories` in products/new and products/:id/edit
- change `new.ejs` and `edit.ejs` to render dynamically

```js
<% for(let category of categories) { %>
  <option value="<%= category %>" <%= product.category === category ? "selected" : "" %> ><%= category %></option>
<% } %>
```

