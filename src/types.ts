export class UserDto{
    user_id: string
    user_name: string
    user_lastname: string
    user_password: string
    user_email: string
    user_balance: number
    user_birthdate: Date
}

export type NewUserDto = Omit<UserDto, 'user_id'>



export class CryptoDto{
    crypto_id: string
    crypto_name: string
    crypto_value: number
    crypto_stock: number
}

export class WalletDto{
    w_user_id: string
    w_crypto_id: string
    w_crypto_amount: number
}
