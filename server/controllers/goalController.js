const getGoal = (req, res) => {
  res.status(200).json({ id: 1 });
};

const createGoal = (req, res) => {
  res.status(200).json(req.body);
};

const updateGoal = (req, res) => {
  if (req.params.id === '5'){
    throw new Error("I hate 5");
  }
  res.status(200).json({ body: req.body, lol: req.params.id });
};

const deleteGoal = (req, res) => {
  res.status(200).json(req.body);
};

module.exports = {
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
