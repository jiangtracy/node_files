"use strict";


const fsP = require("fs/promises");
const axios = require("axios");
// const dns = require("dns");
// const extractDomain = require('extract-domain');


/* Print file to the console */
async function cat(path) {
  debugger;
  try {
    let contents = await fsP.readFile(`./${path}`, "utf8");
    console.log(contents);
  } catch(err) {
    console.log('Error', err);
    process.exit(1);
  }
}

// function checkUrl(err, hostname){
//   if (err) {
//     cat(url);
//   } else {
//     return true;
//   }
//   return false;
// }

/* takes in an string, if it's a valid url, make an axios call and print the html, otherwise
 call cat function or print error */
async function webCat(path) {
  try {
    let resp = await axios.get(path);
    console.log(resp.data);
  }catch(err){
    if (err.errno === -61){
      cat(path);
    }else{
          console.log('Error', err);
          process.exit(1);
    }
  }
}

const argv = process.argv[2];

webCat(argv);

