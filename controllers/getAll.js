const mongoose = require("mongoose");
const Trade = require("../models/trade");


exports.allTrades = async (req, res) => {
  try {
    const { type = null, user_id = null } = req.query;

    const filter = {};
    if (type) {
      filter.type = type;
    }
    if (user_id) {
      filter.user_id = user_id;
    }
    const trades = await Trade.find(filter);
    res.status(200).json(trades);
  }
  catch (err) {
    console.error('Error finding trade:', err);
    return res
      .status(500)
      .json({ error: 'An internal error occurred while finding the trade.' });
  }
};