const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");

// Matches with "/api/uploads"
router.route("/")
  .get(uploadController.findAll)
  .post(uploadController.create);

// Matches with "/api/uploads/:id" ?
router
  .route("/:id")
  .get(uploadController.findById)
  .put(uploadController.update)
  .delete(uploadController.remove);

module.exports = router;
