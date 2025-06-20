import { string, z } from 'zod'

export const userZodeSchema = z.object({
  email: string().email({ message: '* Make sure email is valid' }),
  password: string().min(6, { message: '* Password requires min 6 chars' })
})

export interface UserType {
  email: string,
  password: string
}