const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required:true,
    },
    is_drink:{
        type: Boolean,
        default:false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    num_sales:{
        type: Number,
        default:0
    }

})

const menuItem= mongoose.model('menuItem', menuItemSchema);
module.exports = menuItem;




/* dummy data
{
  "name": "Mango Shake",
  "price": 120,
  "taste": "sweet",
  "is_drink": true,
  "ingredients": ["mango", "milk", "sugar"],
  "num_sales": 25
}
*/