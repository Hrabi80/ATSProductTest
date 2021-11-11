const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const Products = require('../model/products');

const productRouter = express.Router();
productRouter.use(bodyParser.json());


productRouter.route('/product')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next)=>{
  Products.find({})
    .then((prods)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(prods);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

productRouter.route('/product/:product-id')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
  Products.findById(req.params.product-id)
    .then((product) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    }, (err) => next(err))
    .catch((err) => next(err));
})

 
  

  module.exports = productRouter;