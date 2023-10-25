import "dotenv/config";

import express from "express";
import { JSONRPCServer } from "json-rpc-2.0";
import "./database";
import { registerRoutes, routes } from "./routes/router";

const app = express();
app.use(express.json());

const server = new JSONRPCServer();

registerRoutes(server, routes);

// app.use(/\/json-rpc\/.+/, (req, res, next) => {
// 	req.url = "/json-rpc";
// 	next();
// });
app.use((req, res, next) => {
	if (req.url.startsWith("/json-rpc/")) {
		req.url = "/json-rpc";
	}
	next();
});
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
