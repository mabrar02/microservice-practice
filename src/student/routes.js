const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("using API route");
});

module.exports = router;
