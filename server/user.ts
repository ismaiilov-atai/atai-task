import { usersTable } from './db/schema'
import { Hono } from 'hono'
import { db } from './db'

const user = new Hono()

user
  .get('/', async (c) => {
    const users = await db.select().from(usersTable)
    return c.json({ users }, 200)
  })
  .post('/', c => {

    return c.json({}, 200)
  })


export default user