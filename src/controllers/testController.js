const db = require("../data/database");
const Test = db.tests;

exports.create = (req, res) => {
  const data = req.body;
  // Validate request
  if (!data.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Test
  const test = new Test({
    name: data.name,
    number: data.number,
    isValid: data.isValid,
  });

  // Save Test in the database
  test
    .save()
    .then((data) => {
      res.send(`Added a new record\n${data}`);
      console.log(`Added a new record\n${data}`);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Test.",
      });
    });
};

exports.findAll = (req, res) => {};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.testGet = (req, res) => {
  res.json({ message: "Test Route..." });
};
