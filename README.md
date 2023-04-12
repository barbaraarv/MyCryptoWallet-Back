Endpoints:

Add user: '/api/user/add'
  Atributos entrada:
  
    user_name: string
    user_lastname: string
    user_password: string
    user_email: string
    user_balance: number
    user_birthdate: Date
    
  Atributos salida:
  
    user_id: string
    user_name: string
    user_lastname: string
    user_password: string
    user_email: string
    user_balance: number
    user_birthdate: Date
    
Get all users: '/api/user/all'

 Atributos entrada:
    
  Atributos salida:
  
  [
    user_id: string
    user_name: string
    user_lastname: string
    user_password: string
    user_email: string
    user_balance: number
    user_birthdate: Date
  ]
   
Get user by email and password: '/api/user/get/:email/:password'

 Atributos entrada:
 
    user_email: string
    user_password: string
    
  Atributos salida:
  
    user_id: string
    user_name: string
    user_lastname: string
    user_password: string
    user_email: string
    user_balance: number
    user_birthdate: Date
   
