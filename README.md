# Feedget (Feedback Widget)
Web application widget where users can send feedback about problems, ideas or others about a website

<img width="416" alt="Feedget" src="https://user-images.githubusercontent.com/58858236/167509610-773ceccb-d68f-4f87-b0fd-1d6a06251390.png">

## Techs
- Node
- Typescript
- Express
- Prisma
- React JS
- Typescript
- Tailwindcss

## What I have learned
- How to use prisma ORM with NodeJS, Typescript and SQLite
- How to create a Widget
- How to use Tailwindcss to style the components
- Best development practices

## How to run the server application
First install all dependencies
```bash
npm install
````
Create a .env file and fill the environment variables (use the .env.example file as example) and then

Update prisma models
```bash
npx prisma generate
```

Run migrations on database
```bash
npx prisma migrate dev
```

Run the application
```bash
npm run dev
```

## How to run the web application
First install all dependencies
```bash
npm install
````

Run the application
```bash
npm run dev
```
Access the application on your browser using the URL below
```text
http://localhost:3000
```

All set. Now you can start sending feedbacks.

---
Created by Edu during the event NLW Return of @Rocketseat.
