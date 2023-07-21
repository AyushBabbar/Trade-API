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
      return res
        .status(200)
        .json({ success: true, trade: trade });
    }
  }
  catch (err) {
    return res
      .status(500)
      .json({ success: false, error: 'An error occurred while finding the trade.' });
  }
};