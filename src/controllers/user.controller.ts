import { UserService } from "../services/user.service";
const userService: UserService = new UserService()

export const userController = {
    addUser : (req: any, res: any)=>{
        try {
            const newUser = req.body
            userService.addUser(newUser).then(result => {
                res.json(result)
            })
        } catch (error){
            console.error(error)
            res.sendStatus(500)
        }
    },
    
    getAllUsers : (_req: any, res: any)=>{
        try {
            userService.getAllUsers().then(result => {
                res.json(result)
            })
        } catch (error){
            console.error(error)
            res.sendStatus(500)
        }
    },


    getUserByEmailAndPassword: (req: any, res: any)=>{
        try {
            const email = req.params.email
            const password = req.params.password
            userService.getUserByEmailAndPassword(email, password).then(result => {
                (result!=null) ? res.json(result): res.sendStatus(404)
            })
            
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }
    },

    getUserById: (req: any, res: any)=>{
        try {
            const id = req.params.id
            userService.getUserById(id).then(result => {
                (result!=null) ? res.json(result): res.sendStatus(404)
            })
            
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }
    },

    updateUserBalance: (req: any, res: any) => {
        try {
          const newUser = req.body.user;
    
          console.log("updateUser Body: ");
          console.log("updateUser en el controller: " + newUser);
    
          userService.updateUserBalance(newUser).then((result) => {
            console.log("updateUser desde controller");
    
            res.json(result);
          });
        } catch (exception) {
          console.log("Error updateUser desde controller");
    
          console.log(exception);
          res.sendStatus(500);
        }
      },
}