const express = require("express");
const router = express.Router();
const {
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Auth middleware
// Routes protection
const authProtection = require('../middleware/authMiddleware');

// GET /api/goal
// POST /api/goal
router.route("/").get(authProtection, getGoal).post(authProtection, createGoal);
// PUT /api/goal
// DELETE /api/goal
router.route("/:id").put(authProtection, updateGoal).delete(authProtection, deleteGoal);

module.exports = router;
