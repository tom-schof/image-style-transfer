const router = require("express").Router();
const uploadRoutes = require("./uploads");
const userRoutes = require("./user");

// uploads routes
router.use("/uploads", uploadRoutes);
router.use("/user", userRoutes);

module.exports = router;
