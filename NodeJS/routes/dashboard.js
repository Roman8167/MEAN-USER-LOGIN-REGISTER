const express = require("express");
const router = express.Router();
router.get("/dashboard",require("../controllers/dashboard").dashboard)
module.exports = router
