import{ Table, Column, Model } from 'sequelize-typescript'
import { STRING, INTEGER} from 'sequelize'

@Table({
    freezeTableName:true,
    schema: 'crypto-schema',
    tableName: 'crypto',
    createdAt: false,
    updatedAt: false
})
export class CryptoPojo extends Model{
    @Column({
        primaryKey:true,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column({
        type:STRING,
        field: 'crypto_name'
    })
    crypto_name: string

    @Column({
        type:INTEGER,
        field: 'crypto_value'
    })
    crypto_value: number

    @Column({
        type:INTEGER,
        field: 'crypto_stock'
    })
    crypto_stock: number

 
}