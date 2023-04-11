import { UserCryptoPojo } from "../data/models/user_crypto.model";
import { UserCryptoDto } from "../types";
import { UserCryptoRepository } from "../data/repositories/userCrypto.repository";

export class UserCryptoService {
  _userCryptoRepository: UserCryptoRepository;

  constructor() {
    this._userCryptoRepository = new UserCryptoRepository();
  }

  async addUserCrypto(userCrypto: UserCryptoDto): Promise<UserCryptoDto> {
    let newUserCrypto = userCrypto as UserCryptoPojo;
    const userCryptoPromise = await this._userCryptoRepository
      .addUserCrypto(newUserCrypto)
      .then((userCrypto) => {
        return userCrypto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userCryptoPromise;
  }

  async getUserCryptoByUserAndCrypto(
    w_userid: string,
    w_cryptoid: string
  ): Promise<UserCryptoDto/*  | undefined */> {
    const userCryptoPromise = await this._userCryptoRepository
      .getUserCryptoByUserAndCrypto(w_userid, w_cryptoid)
      .then((userCryptoAsPojo) => {
        if (!!userCryptoAsPojo) return userCryptoAsPojo as UserCryptoDto;
        else return undefined;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userCryptoPromise;
  }

  async getAllCryptoByAnUser(w_userid: string): Promise<UserCryptoDto[]| number> {
    const userCryptosPromise = await this._userCryptoRepository
      .getAllCryptoByAnUser(w_userid)
      .then((userCryptosAsPojo) => {
        if (!!userCryptosAsPojo) {
          let userCryptosAsDto: UserCryptoDto[] = [];
          userCryptosAsPojo.forEach((userCryptoAsPojo) => {
            let userCryptoAsDto = userCryptoAsPojo as UserCryptoDto;
            userCryptosAsDto.push(userCryptoAsDto);
          });
          return userCryptosAsDto;
        } else {
          return 1;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userCryptosPromise;
  }
  

  async updateUserCryptoAmount(userCrypto: UserCryptoDto): Promise<UserCryptoDto> {

    const userCryptoPojo: UserCryptoPojo = userCrypto as UserCryptoPojo;

    const userCryptoPromise = await this._userCryptoRepository
      .updateUserCryptoAmount(userCryptoPojo)
      .then((userCrypto) => {
        console.log("updateUserCryptoAmount desde service");

        return userCrypto;
      })
      .catch((error) => {
        console.log("Error updateUserCryptoAmount desde service");

        console.error(error);
        throw error;
      });

    return userCryptoPromise;
  }



}
