const { AirplaneRepository } = require("../repositories/");

const airplaineRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaineRepository.create(data);
        return airplane;
    } catch(error){
        throw error;
    }
}

module.exports = {
    createAirplane
}