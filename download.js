const fs = require('fs');
const request = require('request');


const download = (url, destination, failCallback, successCallback) => {

    const file = fs.createWriteStream(destination);
    const sendRequest = request.get(url);

    // verify response code
    sendRequest.on('response', (response) => {
        if (response.statusCode !== 200) {
            return failCallback('Response status was ' + response.statusCode);
        }
        sendRequest.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => {
        file.close(successCallback("Download successful for URL: " + url + " into " + destination + " file."));
    });

    // check for request errors
    sendRequest.on('error', (err) => {
        fs.unlink(destination);
        return failCallback(err.message);
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(destination); // Delete the file async. (But we don't check the result)
        return failCallback(err.message);
    });
};


module.exports = { download };





