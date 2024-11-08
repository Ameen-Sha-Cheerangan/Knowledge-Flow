const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category: { type: String, required: true, unique: true },
  subcategory: [{ type: String }],
});

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);

module.exports = CategoryModel;
