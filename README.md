
Modelo de datos relacional usado: 
![image](https://user-images.githubusercontent.com/59150317/231603312-dc9df8ee-eadf-4ceb-8507-c42c8aebc415.png)


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
   
