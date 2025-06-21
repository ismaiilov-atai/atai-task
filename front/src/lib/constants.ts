import type { RoutesConfig, SignMessagesType } from '@/types/auth_types'

export const ACCESS_TOKEN = 'access_token' as const

export const SIGNUP_HEADER_TEXT_CONTENTS: RoutesConfig = {
  signup: {
    title: 'Signup',
    description: 'Create an account to unlock full benefits',
  },
  login: {
    title: 'Login',
    description: 'Welcome back, please provide your credentials',
  },
} as const


export const SIGNIN_MESSAGES: SignMessagesType = {
  signup: {
    success: 'User created successfully!',
    failure: 'Failed to create'
  },
  login: {
    success: 'You are in, welcome back!',
    failure: 'Login failed'
  }
} as const