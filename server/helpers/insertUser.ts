import { findUserByEmail } from './findUserByEmail'
import { ErrorException } from '../ErrorExeptions'
import { UserType } from '../types/user_type'
import { usersTable } from '../db/schema'
import { db } from '../db'

export const insetUser = async (user: UserType): Promise<typeof usersTable.$inferSelect> => {
  const newUser: typeof usersTable.$inferInsert = user

  const foundUser = await findUserByEmail(newUser.email)
  if (foundUser) throw new ErrorException(`User exist with email: ${newUser.email}, try to login or use different email`, 409)


  const [createdUser] = await db.insert(usersTable).values(newUser).returning()
  return createdUser
}