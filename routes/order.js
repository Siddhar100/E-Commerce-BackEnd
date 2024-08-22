const express = require("express");
const router = express.Router();
const Orders = require("../models/Oders");
const { body } = require("express-validator");


router.post("/setOrders", async (req, res) => {
  const order = new Orders({
    userId: req.body.email,
    itemCode: req.body.code,
    itemPrice: req.body.price,
  });
  try {
    const dataToSave = await order.save();
    res.status(200).send({
      message: "Order is created",
    });
    // res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/getOrders",[
   body("email","Enter an email!").exists(),
], async (req, res) => {
    let orderedItems = await Orders.find({userId:req.body.email});
    if(orderedItems){
        return res.status(200).send(orderedItems);
    }else{
        return res.status(400).send({message:"no data found!"});
    }
});
module.exports = router;
