import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TeamOnTournamentAttributes {
    tournament_id: number;
    team_id: number;
    place?: number;
}

@Table({
	tableName: "team_on_tournament",
	timestamps: false 
})
export class TeamOnTournament extends Model<TeamOnTournamentAttributes, TeamOnTournamentAttributes> implements TeamOnTournamentAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	tournament_id!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	team_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	place?: number;

}