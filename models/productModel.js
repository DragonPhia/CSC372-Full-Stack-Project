//productModel.js

const db = require("./database");

exports.getAllProducts = () => {
  return db.all("SELECT id, name, image_url, price FROM Products");
};

exports.getProductById = (id) => {
  const product = db.get("SELECT * FROM Products WHERE id = ?", id);
  return product;
};

exports.searchProducts = (query) => {
  return db.all("SELECT id, name, image_url, price FROM Products WHERE name LIKE ?", `%${query}%`);
};

exports.getProductsByCategory = (categoryId) => {
  return db.all("SELECT id, name, image_url, price, category_id FROM Products WHERE category_id = ?", categoryId);
};

exports.addProduct = (name, description, imageUrl, price, categoryId, isFeatured) => {
  return db.run(
    "INSERT INTO Products (name, description, image_url, price, category_id, is_featured) VALUES (?, ?, ?, ?, ?, ?)",
    name, description, imageUrl, price, categoryId, isFeatured
  );
};

exports.updateProduct = (id, name, description, imageUrl, price, categoryId, isFeatured) => {
  return db.run(
    "UPDATE Products SET name = ?, description = ?, image_url = ?, price = ?, category_id = ?, is_featured = ? WHERE id = ?",
    name, description, imageUrl, price, categoryId, isFeatured, id
  );
};