import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize("mysql://root:root@localhost:3306/jakarta-group-29");

export default sequelize;