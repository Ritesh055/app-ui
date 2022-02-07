const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    allowedHeaders: "*",
    origin: true,
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send({ message: "Hi, there!" });
});

app.post("/api/state/cache", (req, res) => {
  const { data } = req.body;
  console.log(data);
  return res.status(204).json({ message: "success" });
});

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3000");
});