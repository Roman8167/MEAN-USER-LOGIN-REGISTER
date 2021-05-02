const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser")
const verifyToken = require("../middleware")
router.get("/login",require("../controllers/login").login)
router.post("/login",require("../controllers/login").login_account)
router.delete("/logout",require("../controllers/login").logout)
module.exports = router