import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TeamSponsorsAttributes {
    teams_id: number;
    sponsors_id: number;
}

@Table({
	tableName: "team_sponsors",
	timestamps: false 
})
export class TeamSponsors extends Model<TeamSponsorsAttributes, TeamSponsorsAttributes> implements TeamSponsorsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	teams_id!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	sponsors_id!: number;

}