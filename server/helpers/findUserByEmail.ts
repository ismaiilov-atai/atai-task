import { usersTable } from '../db/schema'
import { eq } from 'drizzle-orm'
import { db } from '../db'

export const findUserByEmail = async (email: string): Promise<typeof usersTable.$inferSelect> => {
  const [user] = await db.query.usersTable.findMany({
    where: eq(usersTable.email, email)
  })
  return user
}