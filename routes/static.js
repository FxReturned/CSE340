const express = require('express');
const path = require('path');
const router = express.Router();

// Static Routes
// Servir la carpeta "public" y sus subcarpetas de forma correcta
router.use(express.static(path.join(__dirname, "..", "public")));
router.use("/css", express.static(__dirname + "/../public/css"));
router.use("/js", express.static(__dirname + "/../public/js"));
router.use("/images", express.static(__dirname + "/../public/images"));
module.exports = router;