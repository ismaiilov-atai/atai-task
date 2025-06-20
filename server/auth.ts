import { createUserValidator } from './helpers/createUserValidator'
import { validator } from 'hono/validator'
import { verify } from 'hono/jwt'
import { Hono } from 'hono'


const auth = new Hono()

auth
  .post('/',
    validator('json', createUserValidator),
    async c => {
      try {
        const authHeader = c.req.header('Authorization')

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return c.json({ error: 'Unauthorized' }, 401)
        }

        const token = authHeader.split(' ')[1]
        const decodedPayload = await verify(token, process.env.JWT_SECRET || '')

        return c.json({ token: decodedPayload }, 201)
      } catch (error) {
        return c.json({ message: 'Unauthorized' }, 401)
      }
    })

export default auth