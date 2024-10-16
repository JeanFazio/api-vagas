import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Vaga = sequelize.define("Vaga",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salario: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: "vagas",
    }
);

export { Vaga };
