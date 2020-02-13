const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserEmail = new Schema({
  name: { type: String, required: true, max: 100 },
  email: { type: String, required: true }
});

module.exports = mongoose.model("UserEmail", UserEmail);
