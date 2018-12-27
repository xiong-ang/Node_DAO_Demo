const MongoClient = require('mongodb').MongoClient;
const dbconfig = require('../../config/db.config');
const log = require('../../logs/logger');

// Connection URL
const url = dbconfig.dbUrl;

module.exports ={
    async connect(dbName){
        return new Promise((reslove, reject)=>{
            MongoClient.connect(url, function (err, client) {
                if(err){
                    log.write("Connected to server error");
                    reject();
                } else{
                    log.write("Connected successfully to server");
                    reslove(client);
                }
            });
        });
    },
    async close(client){
        if(client){
            client.close();
            log.write("Close server successfully");
        }
    }
};