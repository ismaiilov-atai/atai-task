import type { UserInsertResponseType } from '@/types/user_types_client'
import type { UserType } from '../../../server/types/user_type'
import { clientAPI } from './api'

export const inserUser = async (user: UserType): Promise<UserInsertResponseType> => {
  const response = await clientAPI.user.$post({ json: user })
  const result = await response.json() as UserInsertResponseType
  return result
}