# node-react-batch2

# API
1. init, npm i express nodemon dotenv cors
2. app.js -> setting server express
4. npm install prisma --save-dev
5. npx prisma init --datasource-provider mysql --output ../generated/prisma
6. npm install @prisma/client
7. create prisma schema
8. setting .env (HOST, CORS_ALLOW_LIST, DATABASE_URL, JWT_SECRET)
9. setting CORS pada server express
10. import "dotenv/config" di prisma.config.ts 
11. npx prisma migrate dev
12. src (route & controller)
13. npx prisma studio

# UI
1. npm create vite@latest my-app -- --template react
2. npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
3. setting vite.config.js & tailwind.css
4. npm install axios
5. src (pages, layout, dll)
6. npm i react-router
7. import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";