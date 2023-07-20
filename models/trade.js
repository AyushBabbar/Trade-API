const mongoose = require('mongoose');


const tradeSchema = new mongoose.Schema(
  {
    id: {
      type: Number
    },
    type: {
      type: String
    },
    user_id: {
      type: Number
    },
    symbol: {
      type: String
    },
    shares: {
      type: Number
    },
    price: {
      type: Number
    },
    timestamp: {
      type: Date
    }
  }
);

module.exports = mongoose.model('Trade', tradeSchema);
