const mime = require('mime');
const download = require("./download");
const readCSV = require("./readCSV");
const csvHeaders = require('csv-headers');
const importOrders = require('./importOrders')


const displayMessage = (message) => {
    console.log(message);
};

const downloadSuccess = (message) => {

    displayMessage(message);
    readCSV.readCSV(destination, importOrders.importOrders);
};

const app = (inputUrl) => {

    // check if the url is valid
        let _ = new URL(inputUrl);

    // check if the file to be downloaded is a csv file
        if (mime.getType(inputUrl) !== "text/csv") {
            throw new Error("The file to be downloaded is not a CSV file but it is a " + mime.getType(inputUrl) + "file.")
        }

    // the name of the file where downloaded data will be put in
        let destination = "orders.csv";

        const downloadOrders = download.download(inputUrl, destination, displayMessage, downloadSuccess);
};


// test url
let myApp = app("https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");


