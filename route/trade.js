const express = require("express");
const router = express.Router();
const getAll = require("../controllers/getAll");
const getSingle = require("../controllers/getSingle");
const addTrade = require("../controllers/addTrade");
const denyaccess = require("../controllers/denyAccess")
const app = express();

router.get("/trades/:id", getSingle.singleTrade);
router.delete("/trades/:id", denyaccess.reject);
router.put("/trades/:id", denyaccess.reject);
router.patch("/trades/:id", denyaccess.reject);
router.get("/trades", getAll.allTrades);
router.post("/trades", addTrade.addCurrTrade);

module.exports = router;


