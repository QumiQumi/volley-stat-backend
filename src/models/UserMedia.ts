import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface UserMediaAttributes {
    media_id: number;
    link: string;
    user_id: number;
}

@Table({
	tableName: "user_media",
	timestamps: false 
})
export class UserMedia extends Model<UserMediaAttributes, UserMediaAttributes> implements UserMediaAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	media_id!: number;

    @Column({
    	type: DataType.STRING(100) 
    })
    	link!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	user_id!: number;

}