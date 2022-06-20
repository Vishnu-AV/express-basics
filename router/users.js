const express = require("express");
const router = express.Router();
router.use(logger) // add middleware to specific router

router.get("/", (req, res) => {
  res.send("home  page");
});
router.get("/users", (req, res) => {
    res.send("users  page");
  });

router.get("/new", (req, res) => {
    console.log(req.query.name)
  res.send("new user added");
});

router.post("/", (req, res) => {
  res.send("Crated User");
});
router
  .route("/:userId")
  .get((req, res) => {
    res.send("new user added"+req.user.name);
  })
  .put((req, res) => {
    res.send("new user updated");
  })
  .delete((req, res) => {
    res.send("new user deleted");
  });
router.get("user/:userId", (req, res) => {
  res.send("Details of user : " + req.params.userId);
});
router.param("userId", (req, res, next, id) => {
  req.user = { id: 233, name: "Charlie" };
  next();
});

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

module.exports = router;
