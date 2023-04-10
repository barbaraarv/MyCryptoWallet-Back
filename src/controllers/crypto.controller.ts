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
    }
}