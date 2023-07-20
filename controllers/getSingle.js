const mongoose = require("mongoose");
const Trade = require("../models/trade");


exports.singleTrade = async (req, res) => {
  try {
    const id = req.params.id;
    const trade = await Trade.find({ id: id });
    if (!trade.length) {
      return res
        .status(404)
        .json({ success: false, message: "No Trade found with given id" });
    }
    else {
      res.status(200).json(trade);
    }
  }
  catch (err) {
    console.error('Error finding trade:', err);
    return res
      .status(500)
      .json({ error: 'An internal error occurred while finding the trade.' });
  }
};