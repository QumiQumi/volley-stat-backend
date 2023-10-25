import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface UsersAttributes {
    id?: number;
    role_id?: number;
    first_name: string;
    second_name: string;
    middle_name?: string;
    birthday_date: string;
    photo?: string;
    gender?: string;
    login?: string;
    password?: string;
    gender_id: number;
    created_at?: Date;
    updated_at?: Date;
    phone?: string;
    email?: string;
}

@Table({
	tableName: "users",
	timestamps: false 
})
export class Users extends Model<UsersAttributes, UsersAttributes> implements UsersAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	role_id?: number;

    @Column({
    	type: DataType.STRING(45) 
    })
    	first_name!: string;

    @Column({
    	type: DataType.STRING(45) 
    })
    	second_name!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(45) 
    })
    	middle_name?: string;

    @Column({
    	type: DataType.DATEONLY 
    })
    	birthday_date!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(150) 
    })
    	photo?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	gender?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	login?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	password?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	gender_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: DataType.NOW 
    })
    	created_at?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updated_at?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(30) 
    })
    	phone?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	email?: string;

}