import { UserType, userZodeSchema } from '../types/user_type'

export const createUserValidator = async (value: any, c: any): Promise<UserType> => {
  const result = userZodeSchema.safeParse(value)
  if (!result.success) return c.json(result.error.flatten(), 400)

  return result.data
}
