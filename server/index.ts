import app from './app'

const server = Bun.serve({
  port: process.env.PORT || 3001,
  hostname: "127.0.0.1",
  fetch: app.fetch
})

console.log(`server running on  ${server.port}`)