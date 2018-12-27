const MongoClient = require('mongodb').MongoClient;
const dbconfig = require('../../config/db.config');
const log = require('../../logs/logger');

// Connection URL
const url = dbconfig.dbUrl;

class mongo_connection{
    static async connect(){
        if(!mongo_connection.connection){
            return new Promise((reslove, reject)=>{
                MongoClient.connect(url, function (err, client) {
                    if(err){
                        log.write("Connected to server error");
                        reject();
                    } else{
                        log.write("Connected successfully to server");
                        mongo_connection.connection = client;
                        reslove();
                    }
                });
            });
        }
    }

    static async close(){
        if(mongo_connection.connection){
            mongo_connection.connection.close();
            log.write("Close server successfully");
        }
    }
}

module.exports = mongo_connection;