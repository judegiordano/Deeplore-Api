import "dotenv/config";

export default {
	type: process.env["DB_TYPE"],
	host: process.env["DB_HOST"],
	port: parseInt(process.env["DB_PORT"] as string),
	username: process.env["DB_USERNAME"],
	password: process.env["DB_PASSWORD"],
	database: process.env["DB_NAME"],
	synchronize: false,
	logging: true,
	autoReconnect: true,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 2000,
	entities: ["./src/Models/**/*.ts"],
	migrations: ["./src/Migrations/**/*.ts"],
	ssl: process.env["NODE_ENV"] === "production" ? { rejectUnauthorized: false } : false,
	cli: {
		entitiesDir: "./src/Models",
		migrationsDir: "./src/Migrations",
	}
};