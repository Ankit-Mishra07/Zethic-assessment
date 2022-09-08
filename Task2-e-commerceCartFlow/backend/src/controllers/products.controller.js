import AllProduct from "../models/allProducts.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await AllProduct.find();
    res.status(200).json({
      success: true,
      message: "products fetched successfully",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      let product = new AllProduct({
        title: req.body[i].title,
        gender: req.body[i].gender,
        description: req.body[i].description,
        category: req.body[i].category,
        price: req.body[i].price,
        size: req.body[i].size,
        color: req.body[i].color,
        rating: req.body[i].rating,
        img: req.body[i].img,
      });
      await product.save();
    }
    res.status(200).json({
      success: true,
      message: "products are created successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
