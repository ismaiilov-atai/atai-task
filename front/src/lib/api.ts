import type { ApiRoutes } from '../../../server/app'
import { ACCESS_TOKEN } from './constants'
import { hc } from 'hono/client'

const client = hc<ApiRoutes>(`http://localhost:3000/`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
  }
})
export const clientAPI = client.api