const { Router } = require("express");
const { getTasks, saveTask, deleteTask } = require("../controllers/TaskControllers");
const router = Router();

router.get("/get", getTasks);
router.post("/save", saveTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
