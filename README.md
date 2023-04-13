
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
   
Get user by id: '/api/user/get/:id'

 Atributos entrada:
 
    user_id: string
    
  Atributos salida:
  
    user_id: string
    user_name: string
    user_lastname: string
    user_password: string
    user_email: string
    user_balance: number
    user_birthdate: Date


Update users Balance: '/updateBalance/'

 Atributos entrada:
 
    user_id: string
    user_balance: number
    
  Atributos salida:
  
    user_id: string
    user_balance: number
    
    
Get all crypto: '/api/crypto/all'

 Atributos entrada:
    
  Atributos salida:
  
  [
   {
    crypto_id: string
    crypto_name: string
    crypto_value: number
    crypto_stock: number
    }
 ]
 
 Get crypto by id: '/api/crypto/get/:id'

 Atributos entrada:
 
  crypto_id: string
    
  Atributos salida:
  
    crypto_id: string
    crypto_name: string
    crypto_value: number
    crypto_stock: number
     
Update crypto stock: '/api/crypto/updateStock'

 Atributos entrada:
 
  crypto_id: string
  crypto_stock: number
    
 Atributos salida:
  
   crypto_id: string
  crypto_stock: number
  
Add usercrypto: '/api/usercrypto/add'

 Atributos entrada:
 
  w_user_id: string
  w_crypto_id: string
  w_crypto_amount: number
    
 Atributos salida:
  
  w_user_id: string
  w_crypto_id: string
  w_crypto_amount: number
  
Get usercrypto by user_id and crypto_id: '/api/usercrypto/get/:w_userid/:w_cryptoid'

 Atributos entrada:
 
  w_user_id: string
  w_crypto_id: string
    
 Atributos salida:
  
  w_user_id: string
  w_crypto_id: string
  w_crypto_amount: number
  
Get all usercryptos by user_id : '/api/usercrypto/get/:w_userid'

 Atributos entrada:
 
  w_user_id: string
    
 Atributos salida:
 
 [
  {
    w_user_id: string
    w_crypto_id: string
    w_crypto_amount: number
  }
 ]
 
 Update usercrypto amount : '/api/usercrypto/updateAmount'

 Atributos entrada:
 
    w_user_id: string
    w_crypto_id: string
    w_crypto_amount: number
    
 Atributos salida:
 

    w_user_id: string
    w_crypto_id: string
    w_crypto_amount: number

  
  
    
