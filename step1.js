"use strict";

const fsP = require("fs/promises");

/* Print file to the console */
async function cat(path) {
  try {
    let contents = await fsP.readFile(`./${path}`, "utf8");
    console.log(contents);
  } catch(err) {
    console.log('Error', err);
    process.exit(1);
  }
}

const argv = process.argv[2];

cat(argv);
