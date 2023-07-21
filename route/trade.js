const express = require("express");
const router = express.Router();
const getAllController = require("../controllers/getAll");
const getSingleController = require("../controllers/getSingle");
const addTradeController = require("../controllers/addTrade");
const denyaccessController = require("../controllers/denyAccess")
const { authenticate } = require("../middleware/authentication");
const app = express();

router.route("/trades/:id")
  .get(authenticate, getSingleController.singleTrade)
  .delete(authenticate, denyaccessController.reject)
  .put(authenticate, denyaccessController.reject)
  .patch(authenticate, denyaccessController.reject);

router.route("/trades")
  .get(authenticate, getAllController.allTrades)
  .post(authenticate, addTradeController.addCurrTrade);

module.exports = router;


