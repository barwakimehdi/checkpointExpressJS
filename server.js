// console.log("hello")
console.clear();
const express = require("express");

const app = express();
const port = 9000;

app.use((req, res, next) => {
  const date = new Date();
  let jour = date.toDateString().slice(0, 3);
  let heure = date.toTimeString().slice(0, 2);
  let state = false;
  switch (jour) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
      state = true;
  }
  if (state === true && heure >= 9 && heure <= 17) {
    next();
  } else res.end("Le site est hors service");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on ${port} `);
});

//   app.get("/", function (req, res) {
//     res.send("hello world");
//   })

app.use(express.static("public"));
