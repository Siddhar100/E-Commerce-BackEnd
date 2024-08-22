const express = require('express');
const router = express.Router();
const Item = require('../models/Item');


router.post("/addItem",async (req,res) =>{
    const item = new Item(
        {
            item : req.body.name,
            price : req.body.price,
            description : req.body.description           
        }
    );
    const newItem = item.save();
    res.send({Item : newItem});
});

router.get("/getItems", async (req,res) =>{
     const itemsFetched = await Item.find();
     res.send(itemsFetched);
});


module.exports = router;