export interface Root {
    user: User
    token: string
  }
  
  export interface User {
    id: number
    name: string
    email: string
    phone: string
    craft: any
    bio: any
    address: any
    email_verified: boolean
    status: string
    is_vendor: boolean
    photo: any
    thumbnail: any
    created_at: string
    service_count: number
    product_count: number
    plan: any
  }