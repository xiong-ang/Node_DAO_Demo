module.exports = {
    async doCreate(connect, people) {
        let db = connect.db("Test").collection('people');

        return new Promise((reslove, reject) => {
            db.insertOne(people, (err, result) => {
                if (err || !result) {
                    reject();
                } else {
                    reslove();
                }
            });
        });
    },
    async doUpdate(connect, id, people) {
        ;
    },
    async doRead(connect, id) {
        let db = connect.db("Test").collection('people');

        return new Promise((reslove, reject) => {
            db.find({'id':id}).toArray((err, result) => {
                if (err || !result) {
                    reject();
                } else {
                    reslove(result);
                }
            });
        });
    },
    async doDelete(connect, id) {
        ;
    },
    async getCount(connect) {
        ;
    },
    async getAll(connect) {
        let db = connect.db("Test").collection('people');
        return new Promise((reslove, reject) => {
            db.find({}).toArray(function (err, result) {
                if (err || !result) {
                    reject();
                } else {
                    reslove(result);
                }
            });
        });
    }
}