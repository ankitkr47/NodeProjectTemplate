const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : create");
      throw error;
    }
  }

  async destrpy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });

      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);

      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : get");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll(data);

      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : get");
      throw error;
    }
  }

  async updata(id,data) {
    try {
      const response = await this.model.updata(data,{
        where:{
            id:id
        }
      });

      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : get");
      throw error;
    }
  }
}

module.exports = CrudRepository;