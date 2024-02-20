const mongoose = require("mongoose");
require("dotenv").config();

const dbconfig = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  //   await mongoose.connect(process.env.MONGO_URI);
};

module.exports = dbconfig;
