import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps:false,
    tableName:"Todos"
})

export class Todos extends Model{
    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    name!:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    description!:string
}