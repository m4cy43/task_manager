const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// Get all goals
// GET /api/goal
// Private
const getGoal = asyncHandler(async (req, res) => {
  // Find the goal by user
  const allGoals = await Goal.find({user: req.user.id});
  res.status(200).json(allGoals);
});

// Create a goal
// POST /api/goal
// Private
const createGoal = asyncHandler(async (req, res) => {
  // Check the content exists
  if (!req.body.content) {
    res.status(400);
    throw new Error("Content required");
  }

  // Create the goal
  const goal = await Goal.create({
    user: req.user.id,
    content: req.body.content,
  });
  res.status(201).json(goal);
});

// Update a goal
// PUT /api/goal
// Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  // Check the goal exists
  if (!goal) {
    throw new Error("There is no such goal");
  }
  // Check the user exists
  if (!req.user) {
    res.status(401);
    throw new Error("There is no such user");
  }
  // Check the authorization
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Unauthorized");
  }

  // Update the goal
  const updGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updGoal);
});

// Delete a goal
// DELETE /api/goal
// Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  // Check the goal exists
  if (!goal) {
    throw new Error("There is no such goal");
  }
  // Check the user exists
  if (!req.user) {
    res.status(401);
    throw new Error("There is no such user");
  }
  // Check the authorization
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Unauthorized");
  }

  // Delete goal
  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
