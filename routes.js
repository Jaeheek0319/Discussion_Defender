const router = require("express").Router();
require("@tensorflow/tfjs");
const toxicity = require("@tensorflow-models/toxicity");

router.post("/read", async (req, res) => {
  const threshold = 0.9;

  toxicity.load(threshold).then((model) => {
    model.classify("suck").then((predictions) => {
      console.log("******",predictions);
      res.json(predictions);
    });
  });

    
});

router.get("/food/:name/:description", (req, res) => {
  const name = req.params.name;
  const description = req.params.description;
  const foodArray = [];

  const foodObject = { name, description };

  foodArray.push(foodObject);

  res.json(foodArray);
});

module.exports = router;
