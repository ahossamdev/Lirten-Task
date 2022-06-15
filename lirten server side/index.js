const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const profileRouter = require("./Routes/profile");
const cors = require("cors");
const corsOption = {
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200,
};

mongoose
  .connect(process.env.URI)
  .then(() => console.log("connected succefully to DB"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors(corsOption));
app.use(express.json());

app.use("/", profileRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
