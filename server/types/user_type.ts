import { string, z } from 'zod'

export const userZodeSchema = z.object({
  email: string().email(),
  password: string().min(6)
})

export interface UserType {
  email: string,
  password: string
}