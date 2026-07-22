let express = require("express");
let path = require("path");

let app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
