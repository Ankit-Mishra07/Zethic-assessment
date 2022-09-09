import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";

export const getCartProducts = async (req, res) => {
  try {
    const products = await Cart.find({ userId: req.params.id });
    let total = products.reduce((sum, cur) => {
      return sum + cur.price;
    }, 0);

    res.status(200).json({
      success: true,
      message: "cart products fetched successfully",
      data: products,
      total: total,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const createCartProduct = async (req, res) => {
  try {
    const product = await Cart.create(req.body);

    res.status(200).json({
      success: true,
      message: "Product is added to cart successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const product = await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Product is delete from cart successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const buyNowCart = async (req, res) => {
  try {
    const products = await Cart.find({ userId: req.params.id });

    for (let i = 0; i < products.length; i++) {
      let product = new Order({
        title: req.body[i].title,
        gender: req.body[i].gender,
        description: req.body[i].description,
        category: req.body[i].category,
        price: req.body[i].price,
        size: req.body[i].size,
        color: req.body[i].color,
        rating: req.body[i].rating,
        img: req.body[i].img,
        userId: req.body[i].userId,
        productId: req.body[i].productId,
      });
      await product.save();
    }

    await Cart.deleteMany({ userId: req.params.id });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
