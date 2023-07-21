const Trade = require("../models/trade");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const addCurrTrade = async (req, res) => {
  let type = req.body.type;
  type = type.toLowerCase();
  let user_id = req.body.user_id;
  let symbol = req.body.symbol;
  let shares = req.body.shares;
  let price = req.body.price;
  let timestamp = req.body.timestamp;
  if (
    !type ||
    !user_id ||
    !symbol ||
    !shares ||
    !price
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Missing Parameters" });
  }
  if (
    shares < 1 ||
    shares > 100
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid Value of shares' });
  }
  if (
    !(type === "buy" ||
      type === "sell")
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid Value of type' });
  }
  try {
    let totalDoc = await Trade.countDocuments();
    let id = totalDoc + 1;
    let newTrade = new Trade({
      id: id,
      type: type,
      user_id: user_id,
      symbol: symbol,
      shares: shares,
      price: price
    });
    if (timestamp) {
      newTrade.timestamp = timestamp;
    }
    await newTrade.save();
    return res
      .status(201)
      .json({ success: true, trade: newTrade });

  } catch (err) {
    console.error('Error adding trade:', err);
    return res
      .status(500)
      .json({ success: false, error: 'An error occurred while adding the trade.' });
  }
};

module.exports = {
  addCurrTrade: addCurrTrade
}