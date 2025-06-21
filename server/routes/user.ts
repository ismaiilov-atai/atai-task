import { createUserValidator } from '../helpers/createUserValidator'
import { insetUser } from '../helpers/insertUser'
import { validator } from 'hono/validator'
import { jwtify } from '../helpers/jwtify'
import { usersTable } from '../db/schema'
import bcrypt from 'bcryptjs'
import { Hono } from 'hono'
import { db } from '../db'

const user = new Hono()
  .get('/', async (c) => {
    const users = await db.select().from(usersTable)
    return c.json({ users }, 200)
  })
  .post('/',
    validator('json', createUserValidator),
    async c => {
      try {
        const user = c.req.valid('json')

        const hash = await bcrypt.hash(user.password, 10)
        const createdUser = await insetUser({ ...user, password: hash })
        const token = await jwtify(createdUser)

        return c.json({ token }, 201)
      } catch (error) {
        return c.json({ error: (error as Error).message }, 409)
      }
    })

export default user