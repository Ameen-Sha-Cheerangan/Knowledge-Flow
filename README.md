# Knowledge-Flow

## Description

This is a Knowledge-Flow project.

## Prerequisites

- Node.js
- MongoDB
- npm

## Installing Dependencies

1. Clone the repository or extract the zip file
2. cd into the server folder
3. run "npm install"
4. cd into the client folder
5. run "npm install"

## Setting up the .env

Both the `server` and `client` folders have a `.env.example` file. Copy each one to `.env` and fill in your values.

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

### Server (`server/.env`)

| Variable      | Description                   | Example                                  |
| ------------- | ----------------------------- | ---------------------------------------- |
| `MONGODB_URI` | MongoDB connection string     | `mongodb://localhost:27017/myDataBase`   |
| `PORT`        | Port the server runs on       | `8000`                                   |
| `JWT_SECRET`  | Secret key for signing JWTs   | `some_random_secret_string` like `7892`             |

### Client (`client/.env`)

| Variable       | Description        | Example                                                    |
| -------------- | ------------------ | ---------------------------------------------------------- |
| `VITE_API_URL` | Backend base URL   | `http://localhost:8000` (dev) or your deployed URL (prod)  |
=======
1. cd into the server folder
2. create a .env file
3. add the following

```
MONGODB_URI=<your mongodb uri>
PORT=<your port>
JWT_SECRET=<your jwt secret>
```

Giving an example

```
MONGODB_URI='mongodb://localhost:27017/myDataBase'
PORT=8000
JWT_SECRET=1234
```
>>>>>>> ad6ca4ff6a2b52b5f5c5be6486353950604113b6

## Running the Project

1. cd into the server folder
2. run "npm start"
3. cd into the client folder
4. run "npm run dev"

## Usage

1. Create a user with Username "Admin"(he will be the admin of the system)
2. Login with the user created in step 1
3. From here you can create a new Department, and courses under it.
4. Then we can register other users and then do all the operations as per the SRS.
   ( Note : Step 1-3 are important as no other user can create any posts without a department and course within it, which only the "Admin" can do)
