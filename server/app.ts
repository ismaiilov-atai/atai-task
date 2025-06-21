import { ContentfulStatusCode } from 'hono/utils/http-status'
import { jwtMiddleware } from './middlewares/jwtMiddleware'
import { ErrorException } from './ErrorExeptions'
import type { JwtVariables } from 'hono/jwt'
import { except } from 'hono/combine'
import user from './routes/user'
import auth from './routes/auth'
import { Hono } from 'hono'

type Variables = JwtVariables
const app = new Hono<{ Variables: Variables }>()

const apiRoutes = app.basePath('/api')
  .use('/*', except(['/api/user', '/api/user/auth'], jwtMiddleware))
  .get('/', (c) => c.redirect('api/user'))
  .route('/user/auth', auth)
  .route('/user', user)


app.onError((err, c) => {
  if (err instanceof ErrorException) {
    return c.json({ error: err }, err.status as ContentfulStatusCode)
  }

  return c.json({ error: 'Internal error' }, 500)
})

export default app
export type ApiRoutes = typeof apiRoutes