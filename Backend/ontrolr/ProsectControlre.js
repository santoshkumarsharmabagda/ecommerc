const Product = require("../model/prodectmodel");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncfun = require("../middleware/catchasyncerror");
const ApiFeature = require("../utils/apifeatarycter");
// Create a new product -- Admin
exports.createProduct = catchAsyncfun(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({ success: true, product });
});

// get all products
exports.getAllProdet = catchAsyncfun(async (reg, res, next) => {

  ApiFeature(Product.find(), req.query); 

  const proudets = await Product.find();
  if (!proudets) {
    if (!proudets) {
      return res.status(500).json({ success: false, message: "Product not found" });
    }
      }
  res.status(200).json({ success: true, proudets });
});

//  get products details
exports.getProductdetails = catchAsyncfun(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: product,
  });
});

//  Update products -- Admin

exports.updateProduct = catchAsyncfun(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidatiors: true,
    useFindAndModify: true,
  });

  res.status(200).json({ success: true, message: product });
});

// delete product -- Admin

exports.deleteProduct = catchAsyncfun(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
