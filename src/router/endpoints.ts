import { Players } from "@/models/Players";
import { FindOptionsWithPagination, paginate } from "@/router/pagination";
import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";

type Endpoints = Record<string, SimpleJSONRPCMethod>;
export function registerRoutes(server: JSONRPCServer, routes: Endpoints) {
	Object.entries(routes).forEach(([key, value]) => {
		server.addMethod(key, value);
	});
}
export const endpoints: Endpoints = {
	players: (params: FindOptionsWithPagination) => paginate(Players, params),
};
