const express = require("express")
const router = express.Router();
router.get("/signup",require("../controllers/signup").signup)
router.post("/signup",require("../controllers/signup").signup_account)
module.exports = router