const router = require("express").Router();
const uploadRoutes = require("./uploads");

// Book routes
router.use("/uploads", uploadRoutes);

module.exports = router;
