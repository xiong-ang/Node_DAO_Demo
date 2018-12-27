const mongodb_connection = require('./mongodb_Connection');

module.exports = {
    getMongoDB_Connection:()=> {
        return mongodb_connection;
    },
    getOtherDB_Connection:()=> {
        return mongodb_connection;
    }
};