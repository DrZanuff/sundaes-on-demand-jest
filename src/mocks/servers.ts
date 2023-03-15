// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers) // Follow: https://github.com/mswjs/msw/issues/1539#issuecomment-1468498469
export const serverAddress = 'http://localhost:3030'
