const router = require("express").Router();
const uploadRoutes = require("./uploads");

// uploads routes
router.use("/uploads", uploadRoutes);

module.exports = router;
