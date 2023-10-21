import "dotenv/config";

import express from "express";
import { JSONRPCServer } from "json-rpc-2.0";
import "./database";
import { registerRoutes, routes } from "./routes/router";

const app = express();
app.use(express.json());

const server = new JSONRPCServer();

registerRoutes(server, routes);

app.post("/json-rpc", (req, res) => {
	const request = req.body;

	server.receive(request).then((response) => {
		if (response) {
			res.json(response);
		} else {
			res.sendStatus(404);
		}
	});
});

app.listen(process.env.PORT, () => {
	console.log("Server is running on port " + process.env.PORT);
});
