import { CryptoService } from './../services/crypto.service';
const cryptoService: CryptoService = new CryptoService()

export const cryptoController = {

    getAllCrypto: (_req: any, res: any)=>{
        try {
            cryptoService.getAllCrypto().then(result => {
                res.json(result)
            })
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }
    },

    getCryptoById: (req: any, res: any)=>{
        try {
            const cryptoID = req.params.id
            cryptoService.getCryptoById(cryptoID).then(result => {
                (result!=null) ? res.json(result): res.sendStatus(404)
            })
            
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }
    },

    updateStock: (req: any, res: any) => {
        try {
            console.log(req.body.crypto)
          const crypto = req.body.crypto;

    
          cryptoService.updateStock(crypto).then((result) => {

    
            res.json(result);
          });
        } catch (exception) {

    
          console.log(exception);
          res.sendStatus(500);
        }
      },
}