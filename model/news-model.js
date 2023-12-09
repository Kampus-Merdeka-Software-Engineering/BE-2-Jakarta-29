import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import { fn } from "sequelize";

const News = sequelize.define('News', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    topics: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const rawData = this.getDataValue('date')
            return rawData ? rawData.toISOString().split('T')[0] : null
        }
    }
},
{
    freezeTableName: true,
    timestamps: false,
})

export default News;