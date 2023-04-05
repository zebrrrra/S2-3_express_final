const express = require("express");
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const sections = [
  { title: "About" },
  { title: "Portfolio" },
  { title: "Contact" },
];
const home = { title: "首頁" };

app.get("/", (req, res) => {
  res.render("show", { section: home });
});

app.get("/:title", (req, res) => {
  const section = sections.find((item) => item.title === req.params.title);
  res.render("show", { section });
});

app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`);
});
