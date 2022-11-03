const fs = require("fs");

fs.readdir("./public/images/camp", (err, files) => {
  fs.writeFileSync("./public/camp.json", JSON.stringify(files));
});

fs.readdir("./public/images/races", (err, files) => {
  fs.writeFileSync("./public/races.json", JSON.stringify(files));
});
