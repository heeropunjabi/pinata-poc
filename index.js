const fs = require("fs");
require("dotenv").config();

const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);

const readableStreamForFile = fs.createReadStream("./Aman Darya.webm");
const options = {
  pinataMetadata: {
    name: "MyMetaData",
  },
  pinataOptions: {
    cidVersion: 0,
  },
};
let start = new Date();
console.log("started...");
const store = async () => {
  let pinResult = await pinata.pinFileToIPFS(readableStreamForFile, options);
  console.log(`pinResult`, pinResult);
  let end = new Date();
  let time = end.getTime() - start.getTime();
  console.log(`time`, time);
};

store();
// pinata
//   .testAuthentication()
//   .then((result) => {
//     //handle successful authentication here
//     console.log(result);
//   })
//   .catch((err) => {
//     //handle error here
//     console.log(err);
//   });
