export type LoginTypes = {
    email: string,
    password: string,
};

export type RegistTypes = {
    fullname: string
    contact: number
    address: string
    email: string
    password: string
}

export type AddProductTypes = {
    name: string
    description: string
    price: number
    category: string
    image:string
}

interface DropDownValueTypes {
    id:number
    name:string
}

export type DropDownItemTypes = DropDownValueTypes []