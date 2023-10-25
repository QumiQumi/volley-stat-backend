import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TeamsAttributes {
    id?: number;
    team_type_id: number;
    coach_id?: number;
    name: string;
    logo?: string;
    foundation_date?: string;
    city?: string;
    main_color?: string;
    second_color?: string;
}

@Table({
	tableName: "teams",
	timestamps: false 
})
export class Teams extends Model<TeamsAttributes, TeamsAttributes> implements TeamsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	team_type_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	coach_id?: number;

    @Column({
    	type: DataType.STRING(100) 
    })
    	name!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(150) 
    })
    	logo?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	foundation_date?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(45) 
    })
    	city?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(45) 
    })
    	main_color?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(45) 
    })
    	second_color?: string;

}