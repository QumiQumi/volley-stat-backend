import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface MatchesAttributes {
    id?: number;
    tournament_id: number;
    court_id?: number;
    start_date?: Date;
    end_date?: Date;
    first_team_id: number;
    second_team_id: number;
    score?: string;
    round_id: number;
}

@Table({
	tableName: "matches",
	timestamps: false 
})
export class Matches extends Model<MatchesAttributes, MatchesAttributes> implements MatchesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	tournament_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	court_id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	start_date?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	end_date?: Date;

    @Column({
    	type: DataType.INTEGER 
    })
    	first_team_id!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	second_team_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(3) 
    })
    	score?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	round_id!: number;

}