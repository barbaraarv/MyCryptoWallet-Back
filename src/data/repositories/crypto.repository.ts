import { CryptoPojo } from './../models/crypto.model';
import { connect } from "../config/db.config"

export class CryptoRepository{
    _database:any = {}
    _cryptoRepository: any;


    constructor(){
        this._database = connect()
        this._cryptoRepository = this._database.sequelize.getRepository(CryptoPojo)
    }

    async getAllCrypto(): Promise<CryptoPojo[]>{
        try{
           return await this._cryptoRepository.findAll({
            order: [['crypto_value', 'DESC']]
           })
        }
        catch(error){
            console.error(error)
            return []
        }
    }

    async getCryptoById(id:number): Promise<CryptoPojo| undefined>{
        try{
           return await this._cryptoRepository.findByPk(id)
        }
        catch(error){
            console.error(error)
            return undefined
        }
    }
    
    async updateStock(newCrypto: CryptoPojo): Promise<CryptoPojo> {
        try {
          await this._cryptoRepository.update(
            {
                crypto_stock: newCrypto.crypto_stock,
            },
            {
              where: {
                crypto_id: newCrypto.crypto_id,
              }
            }
          )
          console.log("updateStock desde repository: " + newCrypto);
    
          return newCrypto;
        } catch (error) {
          console.error("Error updateStock desde repository");
          console.error(error);
          return null;
        }
      }
}