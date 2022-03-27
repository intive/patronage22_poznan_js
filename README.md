This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Start with:

```bash
> npm install
```

To run the local development app:

```bash
> npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## StoryBook

Can be run in parallel to the app, since it uses a different port.

```bash
> npm run storybook
```

## SwaggerUI API doc

Available at `/api-doc` page in app.

It's part of the app, no extra commands required. Can be accessed:

- locally with `npm run dev` and [http://localhost:3000/api-doc](http://localhost:3000/api-doc)
- on previews and builds on Vercel, such as [https://patronage22-poznan-js-seven.vercel.app/api-doc](https://patronage22-poznan-js-seven.vercel.app/api-doc)

Requires authorization on all endpoints marked with a padlock icon. Use "Authorize" button at the top and provide a valid JWT token from api/users/signin, or sign in to the app beforehand.
