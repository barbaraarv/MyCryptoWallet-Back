import { UserCryptoPojo } from "../models/user_crypto.model";
import { connect } from "../config/db.config"

export class UserCryptoRepository{
    _database:any = {}
    _userCryptoRepository: any;


    constructor(){
        this._database = connect()
        this._userCryptoRepository = this._database.sequelize.getRepository(UserCryptoPojo)
    }

    async addUserCrypto(newUserCrypto: UserCryptoPojo): Promise<UserCryptoPojo>{
        try{
            newUserCrypto = this._userCryptoRepository.create(newUserCrypto)
            return newUserCrypto
        }
        catch(error){
            console.error(error)
            return null
        }
    }

    async getUserCryptoByUserAndCrypto(w_user_id:string, w_crypto_id: string): Promise<UserCryptoPojo| undefined>{
        try{
            return await this._userCryptoRepository.findOne({
                where: { 
                    w_user_id: w_user_id,
                    w_crypto_id: w_crypto_id
                }
            })
        }
        catch(error){
            console.error(error)
            return undefined
        }
    }

    async getAllCryptoByAnUser(w_user_id:string): Promise<UserCryptoPojo[]/* | undefined */>{
        try{
            return await this._userCryptoRepository.findAll({
                where: { w_user_id: w_user_id }
            });
        }
        catch(error){
            console.error(error)
            return undefined
        }
    }

    

    async updateUserCryptoAmount(newUserCrypto: UserCryptoPojo): Promise<UserCryptoPojo> {
        try {
          await this._userCryptoRepository.update(
            {
                w_crypto_amount: newUserCrypto.w_crypto_amount,
            },
            {
              where: {
                w_user_id: newUserCrypto.w_user_id,
                w_crypto_id: newUserCrypto.w_crypto_id,
              }
            }
          )

    
          return newUserCrypto;
        } catch (error) {
          console.error("Error updateUserBalance desde repository");
          console.error(error);
          return null;
        }
      }
}