//TODO: fix api routing to use get/post/put/delete appropriately
//TODO: need more routes
const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");

// Matches with "/api/" ?
//need to modify this
router.route("/")
  .get(uploadController.findAll)
  .post(uploadController.create);

// Matches with "/api/upload/:id" ? 
//need to modify this
router
  .route("/:id")
  .get(uploadController.findById)
  .put(uploadController.update)
  .delete(uploadController.remove);

module.exports = router;
