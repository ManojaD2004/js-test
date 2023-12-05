const fs = require("fs");

function readData() {
  try {
    const data = fs.readFileSync("./database/data.json", (err) => {
      console.log(err);
    });
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

function writeData(dataToWrite) {
  try {
    fs.writeFileSync(
      "./database/data.json",
      JSON.stringify(dataToWrite),
      (err) => {
        console.log(err);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { readData, writeData };
