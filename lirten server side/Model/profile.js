const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  id: { type: String },
});

module.exports = mongoose.model("Profile", profileSchema);
