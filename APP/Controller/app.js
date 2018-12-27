const peopleService = require('../Service/peopleService')

module.exports = {
    async addEmp(){
        ;
    },
    async addPeople(People={id:123, name:'barret'}){
        peopleService.addPeople(People);
    },
    async getPeople(id = 123){
        return peopleService.getPeople(id);
    },
    async getPeopleCount(){
        ;
    },
    async getAllPeople(){
        return peopleService.getAllPeople();
    }
};

/*
async function test() {
    console.log(await module.exports.getPeople(3));
}

test();
*/