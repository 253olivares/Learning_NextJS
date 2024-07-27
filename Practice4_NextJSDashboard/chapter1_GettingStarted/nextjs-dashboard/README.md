## Getting started in NextJS

run Script: npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

Project Folder Structure:

/app: contains all routes, components, and logic for your application

/app/lib: contains functions used in your application, such as resuable utility functions and data fetching functions

/app/ui: contains all the UI components for your application, such as cards, tables, and forms

/public: Contains all the static assets for your application such as images

Config Files: Some config giles will be included such as next.config.js at the root of our application. Most of these files are created and pre configured when we start a new project using create-next-app

#### Placeholder data

When building user interfaces it helps to have placeholder data.

If a database or API is not yet available we can:

    - use placeholder data in JSON format as a javascript object
    - use a 3rd party service like mockAPI

For this project, we've provided some placeholders in app/lib/placeholder-data.ts

Each javascript object in the file represents a table in our database

Later during the chapter to set up our data base we will use our data in placeholder data to populate our database.

Typescript

Most of our files will have a .ts or .tsx suffix. Reason for this is because our project will be written in TypeScript

We want to use typescript to prevent passing the wrong data format to our components or database. EX: string => number
