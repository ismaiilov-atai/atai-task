import { Next, Variables } from 'hono/types'
import { verify } from 'hono/jwt'
import { Context } from 'hono'

export const jwtMiddleware = async (c: Context<{
  Variables: Variables
}>, next: Next) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '')

  if (!token) return c.json({ error: 'Unauthorized: No access token' }, 401)

  try {
    const payload = await verify(token, process.env.JWT_SECRET || '')
    c.set('jwtPayload', payload)
    await next()
  } catch (err) {
    return c.json({ error: 'Unauthorized: Invalid access token' }, 401)
  }
}