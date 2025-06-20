import { ContentfulStatusCode } from 'hono/utils/http-status'
import { ErrorException } from './ErrorExeptions'
import { serveStatic } from 'hono/bun'
import { Hono } from 'hono'
import user from './user'

const app = new Hono()

const apiRoutes = app.basePath('/api')
  .get('/', (c) => c.redirect('api/user'))
  .route('/user', user)
  .route('/user/auth', user)


app.get('*', serveStatic({ root: './front/dist' }))
app.get('*', serveStatic({ path: './front/dist/index.html' }))


app.onError((err, c) => {
  if (err instanceof ErrorException) {
    return c.json({ error: err }, err.status as ContentfulStatusCode)
  }

  return c.json({ error: 'Internal error' }, 500)
})

export default app
export type ApiRoutes = typeof apiRoutes