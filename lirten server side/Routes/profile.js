const express = require("express");
const router = express.Router();
const { create, find } = require("../Controller/profile");

router.post("/createcustomer", async (req, res) => {
  try {
    const profile = req.body;
    await create(profile);
    res.status(200).json("Created Succefully !");
  } catch (err) {
    res.status(404).json(err.message);
  }
});

router.get("/customers", async (req, res) => {
  try {
    const customers = await find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

module.exports = router;
