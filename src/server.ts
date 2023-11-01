import "dotenv/config";

import cors from "cors";
import express from "express";
import { JSONRPCServer } from "json-rpc-2.0";
import "./database";
import { endpoints, registerRoutes } from "./router/endpoints";

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: true,
	})
);

const server = new JSONRPCServer();

registerRoutes(server, endpoints);

// redirect all /json-rpc/* request to /json-rpc for convenience in DevTools
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
