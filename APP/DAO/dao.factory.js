const mongodb_peopleDAO = require('./mongodb_peopleDAO');

module.exports = {
    getMongo_PeopleDAO() {
        return mongodb_peopleDAO;
    },
    getMongo_OtherDAO() {
        return mongodb_peopleDAO;
    }
};