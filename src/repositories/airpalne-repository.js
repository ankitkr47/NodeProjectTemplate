const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AirplaineRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaineRepository;