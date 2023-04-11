import { UserCryptoService } from "../services/userCrypto.service"
const userCryptoService: UserCryptoService = new UserCryptoService()

export const userCryptoController = {
    addUserCrypto : (req: any, res: any)=>{
        try {
            const newUserCrypto = req.body
            userCryptoService.addUserCrypto(newUserCrypto).then(result => {
                res.json(result)
            })
        } catch (error){
            console.error(error)
            res.sendStatus(500)
        }
    },


    getUserCryptoByUserAndCrypto: (req: any, res: any)=>{
        try {
            const w_userid = req.params.w_userid
            const w_cryptoid = req.params.w_cryptoid
            userCryptoService.getUserCryptoByUserAndCrypto(w_userid, w_cryptoid).then(result => {
                (result!=null) ? res.json(result): res.sendStatus(404)
            })
            
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }
    },

    getAllCryptoByAnUser: (req: any, res: any)=>{
        try {
            const w_userid = req.params.w_userid
            userCryptoService.getAllCryptoByAnUser(w_userid).then(result => {
                (result!=null) ? res.json(result): res.sendStatus(404)
            })  
        }catch(error) {
            console.error(error)
            res.sendStatus(500)
        }
    },

    
    updateUserCryptoAmount: (req: any, res: any) => {
        try {
          const userCrypto = req.body.userCrypto;
          userCryptoService.updateUserCryptoAmount(userCrypto).then((result) => {
            res.json(result);
          });
        } catch (exception) {
          console.log("Error updateUserCryptoAmount desde controller");
    
          console.log(exception);
          res.sendStatus(500);
        }
      },
}