const fs = require('fs');
const csv = require('csv-parser');


const readCSV = (filePath, callback) => {

    let results = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            results.push(row);
        })
        .on('end', () => {
            callback(results);
        })
};

module.exports = { readCSV };