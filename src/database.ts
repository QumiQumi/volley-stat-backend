import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
	dialect: "mysql",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	models: [__dirname + "/models"],

	define: {
		timestamps: false,
		underscored: true,
	},
});
export default sequelize;
