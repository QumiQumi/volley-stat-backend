import Team from "@/models/team";

export default class TeamService {
	static async getTeams() {
		return await Team.findAll();
	}
}
