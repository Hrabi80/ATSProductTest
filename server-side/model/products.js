const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  value:{
      type:Number,
      min: 1,
      max: 5,
      required: true
  },
  content:{
      type:String,
      required: true
  },
  author:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
  }
},{
  timestamps: true
});

// Define product Schema
let productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: {
    type: String,
    required:true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  reviews: [reviewSchema],
 
 
}, {
    timestamps : true
  })
var Products = mongoose.model('Product',productSchema);

module.exports = Products;
