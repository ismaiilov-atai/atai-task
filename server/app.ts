import { serveStatic } from 'hono/bun'
import { Hono } from 'hono'
import user from './user'

const app = new Hono()

app
  .basePath('/api')
  .get('/', (c) => c.redirect('api/user'))
  .route('/user', user)


app.get('*', serveStatic({ root: './front/dist' }))
app.get('*', serveStatic({ path: './front/dist/index.html' }))

export default app