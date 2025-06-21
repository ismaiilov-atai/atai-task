import { createUserValidator } from '../helpers/createUserValidator'
import { findUserByEmail } from '../helpers/findUserByEmail'
import { validator } from 'hono/validator'
import { jwtify } from '../helpers/jwtify'
import bcrypt from "bcryptjs"
import { Hono } from 'hono'


const auth = new Hono()
  .post('/',
    validator('json', createUserValidator),
    async c => {
      try {
        const user = c.req.valid('json')
        const foundUser = await findUserByEmail(user.email)

        const isMatch = await bcrypt.compare(user.password, foundUser.password)

        if (isMatch) {
          const token = await jwtify(foundUser)
          return c.json({ token }, 201)
        }

        throw new Error('Failed to compare passwords')
      } catch (error) {
        return c.json({ error: 'Unauthorized' }, 401)
      }
    })

export default auth