# Overview

This is a task provided by Dmitrii. It includes full authentication and authorization functionality. The authentication page features two tab buttons, allowing users to switch between **Sign Up** and **Log In** modes. Initially i was thinking to implement Monorepo structure and the end came up with _front_ enbeded in _server_ idea.This task was provided by Dmitrii and includes full authentication and authorization functionality. The authentication page features two tab buttons that allow users to switch between **Sign Up** and **Log In** modes. Initially, the project was intended to follow a monorepo structure, but in the end, the frontend was embedded directly within the **server** directory for simplicity. I have an example files in both modules, just refer to that and create your own `.env` file.

## Note

Currently, I'm sending the raw `password` from the browser and hashing it on the server. Since the application is running over HTTP, the password is exposed during the `POST` request, as HTTP does not encrypt REST API calls. Once we secure the application with a **TLS/SSL certificate** (i.e., switch to HTTPS), this exposure will be eliminated.


### To run BackEnd

you don't have to get into `/server` module, it is enought to run script in the root folder

```sh
bun i

bun dev
```

### To run FrontEnd

in the root folder you will see the `/front ` module idea is to spin up front separately

PS: I am using bun to run, you can use your own prefered **Package manager**

```sh
cd ./front

bun i

bun dev
```

# Teach Staks

### Frontend

- [React](https://react.dev/)
- [Tanstack](https://tanstack.com/)

  - [TanStack Router](https://tanstack.com/router/latest/)
  - [TanStack Query](https://tanstack.com/query/latest)

- [React Hook Form](https://react-hook-form.com/docs/useform/form)
- [Zod TypeScript-first schema validation](https://zod.dev/)
- [ShadCN](https://ui.shadcn.com/)

### Backend

- [Hono - Web framework built on Web Standards](https://hono.dev/docs/)

  - [RPC - Hono](https://hono.dev/docs/guides/rpc)
  - [Validation - Hono](https://hono.dev/docs/guides/validation)
  - [Middleware - Hono](https://hono.dev/docs/guides/middleware)
  - [JWT Authentication Helper - Hono](https://hono.dev/docs/helpers/jwt)

- [Drizzle ORM](https://orm.drizzle.team/)
- [GitHub - bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

### Set up your own DB

I was exploring options for running the database locally and came across **Drizzle’s local development setup**. This approach is straightforward and allows us to avoid exposing our `DATABASE_URL`, making development both simpler and more secure.

Please feel free to refer to docs here [Drizzle ORM - How to setup PostgreSQL locally](https://orm.drizzle.team/docs/guides/postgresql-local-setup)


## Futher Development

- Implement **Server-Side Rendering (SSR)** for improved performance and SEO.
- Utilize the native `action` attribute within forms to handle submissions efficiently.
- Minimize prop drilling by adding state management libraries such as **Redux**, **Zustand**, or **TanStack Store**.
- Using **Docker Compose** to spin up both the `/front` and `/server` modules with a single command is likely a good approach
