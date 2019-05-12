const app = require('./app');
const fs = require('fs');
const download = require('./download');


function invalidUrl() {
    try {
        let myApp = app.app("https://samplec svs.s3.amazonaws.com/Sacramentorealestatetransactions.csv")
    } catch (error) {
        if (error.name === "TypeError [ERR_INVALID_URL]") {
            console.log('invalid url test pass')
        }
    }
}

function downloadSuccess() {
    let myDownload = download.download("https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv", "orders.csv", console.log, function () {
        fs.stat('orders.csv', function(err, stat) {
            if(err == null) {
                console.log('download test pass');
            } else if(err.code === 'ENOENT') {
                // file does not exist
                console.log("download test fail");
            }
        });
    });
}

const test1 = invalidUrl();
const test2 = downloadSuccess();
