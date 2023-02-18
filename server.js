const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");

dotEnv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const testRoutes = require("./src/routes/testRoutes");
app.use(testRoutes);
// require("./src/routes/testRoutes")(app);

// set PORT to listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// set connection to MongoDB
const db = require("./src/data/database");
db.mongoose
  .connect(db.connectionString)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log("Cannot connect to MongoDB...", err);
    process.exit();
  });
