const MongoClient = require('mongodb').MongoClient;


const importOrders = (orders) => {
    let databaseUrl = ""; // url of mongodb database

    MongoClient.connect(databaseUrl, function(err, db) {

        if (err) throw err;

        let dbo = db.db("mydb");

        for (order in orders) {

            let query = { customerId:  orders[order]['customerId'] };

            // search Customer collection if the id exists
            dbo.collection("Customers").find(query).toArray(function(err, result) {
                if (err) throw err;

                // if there is customer in the customer collection
                if (result.length !== 0) {
                    dbo.collection("Orders").insertOne(orders[order], function (err, res) {
                        if (err) throw err;
                    })
                }
            });
        }

        db.close();

        console.log("Import New Orders Successfully");

    });

};

module.exports = { importOrders };