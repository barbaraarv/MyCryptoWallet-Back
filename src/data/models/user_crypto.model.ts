import{ Table, Column, Model } from 'sequelize-typescript'
import { STRING, INTEGER} from 'sequelize'

@Table({
    freezeTableName:true,
    schema: 'crypto-schema',
    tableName: 'user_crypto',
    createdAt: false,
    updatedAt: false
})
export class UserCryptoPojo extends Model{

    @Column({
        primaryKey:true,
        type: STRING,
        field: 'w_user_id'
    })
    w_user_id: string
    
    @Column({
        primaryKey:true,
        type: STRING,
        field: 'w_crypto_id'
    })
    w_crypto_id: string

    @Column({
        type:INTEGER,
        field: 'w_crypto_amount'
    })
    w_crypto_amount: number

 
}