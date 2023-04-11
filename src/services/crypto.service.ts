import { CryptoDto } from "../types";
import { CryptoRepository } from '../data/repositories/crypto.repository';
import { CryptoPojo } from "../data/models/crypto.model";

export class CryptoService{
    _cryptoRepository: CryptoRepository

    constructor(){   
        this._cryptoRepository = new  CryptoRepository()
    }

    async getAllCrypto() : Promise<CryptoDto[]>{
        const cryptoPromise = await this._cryptoRepository.getAllCrypto().then(cryptoAsPojo =>{
            let cryptoAsDto: CryptoDto[] = []
            cryptoAsPojo.forEach(cryptAsPojo => {
                let cryptAsDto = cryptAsPojo as CryptoDto
                cryptoAsDto.push(cryptAsDto)
            })
            return cryptoAsDto
        }).catch(error=> {
            console.error(error)
            throw error
        })
        return cryptoPromise
    }
    async getCryptoById(id:number) : Promise<CryptoDto/*  | undefined */>{
        const cryptoPromise = await this._cryptoRepository.getCryptoById(id).then(cryptoAsPojo =>{
            if(!!cryptoAsPojo)
                return cryptoAsPojo as CryptoDto
            else
                return undefined
        }).catch(error=> {
            console.error(error)
            throw error
        })
        return cryptoPromise
    }
    

    async updateStock(crypto: CryptoDto): Promise<CryptoDto> {
        console.log("En el service(DTO): " + crypto);
        const cryptoPojo: CryptoPojo = crypto as CryptoPojo;
        console.log("En el service(POJO): " + cryptoPojo);
        const cryptoPromise = await this._cryptoRepository
          .updateStock(cryptoPojo)
          .then((crypto) => {
            console.log("updateStock desde service");
    
            return crypto;
          })
          .catch((error) => {
            console.log("Error updateStock desde service");
    
            console.error(error);
            throw error;
          });
    
        return cryptoPromise;
      }


    


}