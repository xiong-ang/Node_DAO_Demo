const connectFactory = require('../DAO/connection.factory');
const daoFactory = require('../DAO/dao.factory');


module.exports = {
    async addPeople(people) {
        let mongo_connection = connectFactory.getMongoDB_Connection();
        let mongo_peopleDAO = daoFactory.getMongo_PeopleDAO();

        let connect = await mongo_connection.connect();

        await mongo_peopleDAO.doCreate(connect, people);

        await mongo_connection.close(connect);
    },
    async getPeople(id) {
        let mongo_connection = connectFactory.getMongoDB_Connection();
        let mongo_peopleDAO = daoFactory.getMongo_PeopleDAO();

        let connect = await mongo_connection.connect();

        let result = await mongo_peopleDAO.doRead(connect, id);

        await mongo_connection.close(connect);

        return result;
    },
    async getAllPeople() {
        let mongo_connection = connectFactory.getMongoDB_Connection();
        let mongo_peopleDAO = daoFactory.getMongo_PeopleDAO();

        let connect = await mongo_connection.connect();

        let result = await mongo_peopleDAO.getAll(connect);

        await mongo_connection.close(connect);

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