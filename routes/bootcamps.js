const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;

//OLD CODE
// router.get("/", (req, res) => {
//   //   res.send("Hello from express");
//   //   res.json({name: "Sam"});
//   //   res.sendStatus(400)
//   // res.status(400).json({success: false})
//   //   res.status(200).json({ success: true, data: { id: 1 } });
//   res.status(200).json({ success: true, msg: "Show all bootcamps" });
// });

// router.get("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
// });
// router.post("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "Create New bootcamp" });
// });
// router.put("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
// });
// router.delete("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
// });
