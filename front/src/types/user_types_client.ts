import type { InferResponseType } from 'hono/client'
import { clientAPI } from '@/lib/api'

export type UsersResponseType = InferResponseType<typeof clientAPI.user.$get>
export type UserInsertResponseType = InferResponseType<typeof clientAPI.user.$post>