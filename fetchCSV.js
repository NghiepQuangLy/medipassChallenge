const fs = require('fs');
const request = require('request');


const download = (url, destination, callback) => {

    const file = fs.createWriteStream(destination);
    const sendRequest = request.get(url);

    // verify response code
    sendRequest.on('response', (response) => {
        if (response.statusCode !== 200) {
            return callback('Response status was ' + response.statusCode);
        }
        sendRequest.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => {
        file.close(callback(destination))
    });

    // check for request errors
    sendRequest.on('error', (err) => {
        fs.unlink(destination);
        return callback(err.message);
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(destination); // Delete the file async. (But we don't check the result)
        return callback(err.message);
    });
};


const displayMessage = (message = "Download successful") => {
    console.log(message);
};

let inputUrl = "https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv"

// the name of the file where downloaded data will be put in
let destination = "orders.csv"

let testing = download(inputUrl, destination, displayMessage)

