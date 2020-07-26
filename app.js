var express = require('express');
var app = express();
var sql = require("mssql");
const port=process.env.PORT || 3000;


    // config for your database
    var config = {
        user: 'datareader',
        password: 'dbdatareader2020',
        server: 'sql2019db.northeurope.cloudapp.azure.com', 
        database: 'LTNTST' 
    };

    // connect to your database
/*    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT top (2) IDCUST,NAMECUST FROM LTNTST.dbo.ARCUS', function (err, recordset) {
            
app.get('/', function (req, res) {
   
    
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
*/
app.get('/', function (req, res) {
    res.send("Hello World Again")
});
app.listen(port, () => console.log("Server is running..on port " + port));
