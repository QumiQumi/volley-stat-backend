import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface JudgeOnMatchAttributes {
    match_id: number;
    judge_id: number;
    type: string;
}

@Table({
	tableName: "judge_on_match",
	timestamps: false 
})
export class JudgeOnMatch extends Model<JudgeOnMatchAttributes, JudgeOnMatchAttributes> implements JudgeOnMatchAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	match_id!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	judge_id!: number;

    @Column({
    	type: DataType.STRING(100) 
    })
    	type!: string;

}