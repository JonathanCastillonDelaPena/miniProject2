const test = require("../controllers/testController");
const router = require("express").Router();

router.get("/", test.testGet);

router.post("/test", test.create);

module.exports = router;
