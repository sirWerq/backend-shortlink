const {
    postShortlinkController,
} = require("../controllers/shortlinkController");
const middleware = require("../middleware/middleware");

const router = require("express").Router();

router.post("/create-shortlink", middleware, postShortlinkController);

module.exports = router;
