const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/portfolios", async (req, res) => {
  const result = await db.query("SELECT * FROM portfolios");
  res.json(result.rows);
});

app.post("/api/portfolios", async (req, res) => {
  const { name, risk } = req.body;
  const result = await db.query(
    "INSERT INTO portfolios(name, risk_level) VALUES($1, $2) RETURNING *",
    [name, risk]
  );
  res.json(result.rows[0]);
});

app.listen(3000, () => console.log("Backend running on port 3000"));
