import sequelize from "../config/sequelize.js";
import "../model/kritik-model.js";

export const startSequelize = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        console.log("Connection Successful!")
    } catch (err) {
        console.error(err);
    }
}