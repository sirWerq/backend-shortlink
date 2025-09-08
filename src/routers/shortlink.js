const {
    postShortlinkController,
    redirectShortlinkController,
} = require("../controllers/shortlinkController");
const middleware = require("../middleware/middleware");

const router = require("express").Router();

router.post("/create-shortlink", middleware, postShortlinkController);
router.get("/:id", redirectShortlinkController);

module.exports = router;
