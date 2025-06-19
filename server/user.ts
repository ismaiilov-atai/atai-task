import { Hono } from 'hono'

const user = new Hono()

user
.get('/', (c) => {
  return c.text('User route')
})
.post('/', c => {
  
  return c.json({}, 200)
})


export default user