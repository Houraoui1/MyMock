const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors());
app.use(
  express.json({
    limit: "10mb",
  })
);

const PORT = process.env.PORT || 8000;
//connect mongo db

console.log(process.env.MONGODB_UR);

mongoose
  .connect(process.env.MONGODB_UR)
  .then(() => console.log("connecting to database"))
  .catch((error) => console.log(error, "not connecting to database"));

//shema
const Clientshema = mongoose.Schema({
  gender: String,
  nom: String,
  prenom: String,
  age: String,
  email: {
    type: String,
    unique: true,
  },
  code_postal: String,
  telephone: String,
});
const Cliente = mongoose.model("Client", Clientshema);

// for the signup  check
app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { nom } = req.body;
    const datares = await Cliente.findOne({ nom: nom });

    if (datares) {
      res.send({
        MessageFailure: "this is already in data yoooooooooooooooooooooo",
        alert: false,
      });
    } else {
      const data = Cliente(req.body);
      const save = await data.save();
      res.send({
        MessageSuccess: "upload is seccessfully  yoooooooooooooooooooooo",
        alert: true,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/leads", async (req, res) => {
  try {
    const allData = await Cliente.find({});

    if (allData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.send(allData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/deleteclient", async (req, res) => {
  const { _id } = req.body;
  console.log(req.body, "the id from frontend");
  try {
    if (_id) {
      await Cliente.deleteOne({ _id: _id });
      res.send({ status: "ok", data: "deleted", alert: true });
    } else {
      res.send({ status: "Not ok", data: "Data not deleted", alert: false }); // Fix typo: `note` should be `not`
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});
app.get("/", (req, res) => {
  res.send("server is runing ");
});

app.listen(PORT, () => console.log("server runing hello  " + PORT));
