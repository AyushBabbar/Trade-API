const trade = require("../models/trade");


const update = async (req, res) => {
  const id = req.params.id;
  let tradeInDb = await trade.find({ id: id });
  if (!tradeInDb) {
    res
      .status(404)
      .json({ success: false, message: "No trade found with given id" });
  }
  try {
    const updatedShare = req.body.shares;
    if (!updatedShare) {
      res
        .status(400)
        .json({ success: false, message: "Missing Parameters" });
    }
    const updatedTrade = await trade.findOneAndUpdate({ id: id }, { shares: updatedShare });
    res.status(200).json({ success: true, message: "Trade updated" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Some error occured while updating the trade" });
  }
}

module.exports =
{
  update: update
}