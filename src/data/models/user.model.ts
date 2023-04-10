import{ Table, Column, Model } from 'sequelize-typescript'
import { STRING, INTEGER, DATE} from 'sequelize'

@Table({
    freezeTableName:true,
    schema: 'crypto-schema',
    tableName: 'user',
    createdAt: false,
    updatedAt: false
})
export class UserPojo extends Model{
    @Column({
        primaryKey:true,
        type: STRING,
        field: 'user_id'
    })
    user_id: string

    @Column({
        type:STRING,
        field: 'user_name'
    })
    user_name: string

    @Column({
        type:STRING,
        field: 'user_lastname'
    })
    user_lastname: string

    @Column({
        type:STRING,
        field: 'user_password'
    })
    user_password:string

    @Column({
        type:STRING,
        field: 'user_email'
    })
    user_email:string 

    @Column({
        type:INTEGER,
        field: 'user_balance'
    })
    user_balance: number

    @Column({
        type: DATE,
        field: 'user_birthdate'
    })
    user_birthdate: Date
}