import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Kritik = sequelize.define('Kritik', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: "Anonymous",
    },
    kritik:{
        type: DataTypes.STRING(1234),
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps: false,
});

export default Kritik;