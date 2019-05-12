const app = require('./app');
const fs = require('fs');



function invalidUrl() {
    try {
        let myApp = app.app("https://samplec svs.s3.amazonaws.com/Sacramentorealestatetransactions.csv")
    } catch (error) {
        if (error.name === "TypeError [ERR_INVALID_URL]") {
            console.log('invalid url test pass')
        }
    }
}

const test1 = invalidUrl();
