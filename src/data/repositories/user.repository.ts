import { UserPojo } from "../models/user.model";
import { connect } from "../config/db.config"
import { v4 as uuid } from 'uuid'

export class UserRepository{
    _database:any = {}
    _userRepository: any;


    constructor(){
        this._database = connect()
        this._userRepository = this._database.sequelize.getRepository(UserPojo)
    }

    async addUser(newUser: UserPojo): Promise<number>{
        try{
            newUser.user_id = uuid()
            newUser = this._userRepository.create(newUser)
            return newUser.id
        }
        catch(error){
            console.error("Error addUser desde repository");
            console.error(error)
            return -1
        }
    }

    async getAllUsers(): Promise<UserPojo[]>{
        try{
           return await this._userRepository.findAll()
        }
        catch(error){
            console.error(error)
            return []
        }
    }

    async getUserByEmailAndPassword(email:string, password: string): Promise<UserPojo>{
        try{
           return await this._userRepository.findOne({
                where: { 
                user_email: email,
                user_password: password
                }
            })
        }
        catch(error){
            console.error(error)
            return undefined
        }
    }

    async getUserById(id:string): Promise<UserPojo>{
        try{
           return await this._userRepository.findOne({
                where: { 
                user_id: id,
                }
            })
        }
        catch(error){
            console.error(error)
            return undefined
        }
    }

    async updateUserBalance(newUser: UserPojo): Promise<UserPojo> {
        try {
          await this._userRepository.update(
            {
                user_balance: newUser.user_balance,
            },
            {
              where: {
                user_id: newUser.user_id,
              }
            }
          )
          console.log("updateUserBalance desde repository: " + newUser);
    
          return newUser;
        } catch (error) {
          console.error("Error updateUserBalance desde repository");
          console.error(error);
          return null;
        }
      }

}