export interface RegisterRequest {
  name: string
  email: string
  password: string
  phone: string
}

export interface LoginRequest {
  email: string
  password: string
}
