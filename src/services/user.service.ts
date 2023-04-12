import { UserPojo } from './../data/models/user.model';
import { NewUserDto, UserDto } from "../types";
import { UserRepository } from "../data/repositories/user.repository";

export class UserService{
    _userRepository: UserRepository

    constructor(){   
        this._userRepository = new  UserRepository()
    }

    async addUser(user:NewUserDto) : Promise<number>{
        let newUser = user as UserPojo
        const userPromise = await this._userRepository.addUser(newUser).then(user_id =>{
            return user_id
        }).catch(error =>{
            console.error(error);
            return -1
        })
        return userPromise
    }

    async getAllUsers() : Promise<UserDto[]>{
        const userPromise = await this._userRepository.getAllUsers().then(usersAsPojo =>{
            let usersAsDto: UserDto[]=[]
            usersAsPojo.forEach(userAsPojo =>{
                let userAsDto = userAsPojo as UserDto
                usersAsDto.push(userAsDto)
            })
            return usersAsDto
        }).catch(error =>{
            console.error(error);
            throw error
        })
        return userPromise
    }


    async getUserByEmailAndPassword(username:string, password: string) : Promise<UserDto/*  | undefined */>{
        const userPromise = await this._userRepository.getUserByEmailAndPassword(username, password).then(userAsPojo =>{
            if(!!userAsPojo)
                return userAsPojo as UserDto
            else
                return undefined
        }).catch(error=> {
            console.error(error)
            throw error
        })
        return userPromise
    }

    async getUserById(id:string) : Promise<UserDto/*  | undefined */>{
        const userPromise = await this._userRepository.getUserById(id).then(userAsPojo =>{
            if(!!userAsPojo)
                return userAsPojo as UserDto
            else
                return undefined
        }).catch(error=> {
            console.error(error)
            throw error
        })
        return userPromise
    }

    async updateUserBalance(user: UserDto): Promise<UserDto> {
        console.log("En el service(DTO): " + user);
        const userPojo: UserPojo = user as UserPojo;
        console.log("En el service(POJO): " + userPojo);
        const userPromise = await this._userRepository
          .updateUserBalance(userPojo)
          .then((user) => {
            console.log("updateUserBalance desde service");
    
            return user;
          })
          .catch((error) => {
            console.log("Error updateUserBalance desde service");
    
            console.error(error);
            throw error;
          });
    
        return userPromise;
      }

}