import { Teams } from "@/models/Teams";

export default class TeamService {
	static async getTeams() {
		return await Teams.findAll();
	}
	static async getTeamTypes() {
		return await Teams.findAll();
	}
}
