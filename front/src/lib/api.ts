import type { ApiRoutes } from '../../../server/app'
import { hc } from 'hono/client'

const client = hc<ApiRoutes>(`http://localhost:3000/`)
export const clientAPI = client.api