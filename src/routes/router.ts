import { Players } from "@/models/Players";
import TeamService from "@/services/team-service";
import { JSONRPCServer, SimpleJSONRPCMethod } from "json-rpc-2.0";

type Routes = Record<string, SimpleJSONRPCMethod>;
export function registerRoutes(server: JSONRPCServer, routes: Routes) {
	Object.entries(routes).forEach(([key, value]) => {
		server.addMethod(key, value);
	});
}
export const routes: Routes = {
	teams: TeamService.getTeams,
	teamTypes: TeamService.getTeamTypes,
	players: () => Players.findAll({ limit: 50 }),
};
