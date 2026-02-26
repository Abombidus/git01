// import path from "path";
// import fs from "fs";
// import { EventEmitter } from "events";
// import http from "http";
// import express from "express";
const path = require("path")
const fs = require("fs")
const eventEmiter = require("events")
const http = require("http")
const express = require("express")
const morgan = require("morgan")

const app = express()



const newDoc = path.join(__dirname, "newDoc")
if (fs.existsSync(newDoc)) {
  console.log("The file is already existing");
} else {
  fs.mkdirSync(newDoc);
  console.log("The file is created");
}

const newfile = path.join(newDoc, "readMe.txt");
fs.writeFile(
  newfile,
  "This file contains all the nccessary information on our page",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`File created and put in the document ${newDoc}`);
    }
  }
);

// // Attribution de laction avec node js
action.on("greet", () => {
  console.log(`The action is set and th port is register ${port}`);
});


// Variables d'nvironement
const fs = require("fs")
const path = require("path")
const http = require("http")
const express = require("express")
const app = express()

// PORT 
const port = 3000


http.createServer((req, res) => {
  console.log(req)
})


app.get("/", (req, res) => {
  console.log(req)
})
app.listen(port, () => {

})