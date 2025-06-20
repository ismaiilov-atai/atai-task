import { usersTable } from '../db/schema'
import { sign } from 'hono/jwt'

export const jwtify = async (user: typeof usersTable.$inferSelect): Promise<string> => {
  const payload = {
    sub: user.id,
    userEmail: user.email,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5, // Token expires in 5 days
  }

  const token = await sign(payload, process.env.JWT_SECRET || '')
  return token
}