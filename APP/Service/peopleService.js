const connectFactory = require('../DAO/connection.factory');
const daoFactory = require('../DAO/dao.factory');


module.exports = {
    async addPeople(people) {
        let mongo_connection = connectFactory.getMongoDB_Connection();
        let mongo_peopleDAO = daoFactory.getMongo_PeopleDAO();

        await mongo_connection.connect();

        await mongo_peopleDAO.doCreate(mongo_connection.connection, people);

        //await mongo_connection.close(mongo_connection.connection);
    },
    async getPeople(id) {
        let mongo_connection = connectFactory.getMongoDB_Connection();
        let mongo_peopleDAO = daoFactory.getMongo_PeopleDAO();

        await mongo_connection.connect();

        let result = await mongo_peopleDAO.doRead(mongo_connection.connection, id);

        //await mongo_connection.close(mongo_connection.connection);

        return result;
    },
    async getAllPeople() {
        let mongo_connection = connectFactory.getMongoDB_Connection();
        let mongo_peopleDAO = daoFactory.getMongo_PeopleDAO();

        await mongo_connection.connect();

        let result = await mongo_peopleDAO.getAll(mongo_connection.connection);

        //await mongo_connection.close(mongo_connection.connection);

        return result;
    }
};

/*
async function test() {
    await module.exports.addPeople({id:1, name:'barret'});
    await module.exports.addPeople({id:2, name:'xiong'});
    await module.exports.addPeople({id:3, name:'ang'});
    //console.log(await module.exports.getAllPeople());
    console.log(await module.exports.getPeople(2));
}

test();
*/