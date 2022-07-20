const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require('./category')

// make todo schema
const todoSchema = new Schema({

  // user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  date: Date,
  // time: String,
  sortOrder: Number,
  description: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },

  urgency:String
}, { timestamps: true });


// make todo model
const Todo = model("Todo", todoSchema);

// make category model
// const Category = model("Category", categorySchema);


///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
// Adding Notes
module.exports = Todo;
