import express from "express";

const app = new express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Finalmente!!! 🙏🏻");
});

app.listen(80);
