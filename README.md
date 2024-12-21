# **Node.js Server for Students Dashboard**

## **1. Project Overview**

This is a **Node.js Express** server that handles CRUD operations for the [Students Dashboard React App](https://github.com/Kanha-13/StudentsDashboard/tree/master). It acts as the backend, processing requests from the frontend, querying the Supabase database using **Prisma ORM**, and returning appropriate responses.

## **2. Technologies Used**

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **Prisma ORM**: For database interaction with Supabase.
- **Supabase**: Database backend for storing student and related data.

## **3. Folder Structure**

```
project-root/
├── controllers/         # Handles all business logic
│   ├── studentController.js
│   └── ...
├── db/
│   └── connect.js       # Creates and initializes the Prisma client
├── prisma/
│   ├── schema.prisma    # Prisma schema defining the database models
│   └── migrations/      # Migration files for schema changes
├── routes/              # API endpoints organized by feature
│   ├── studentRoutes.js
│   └── ...
├── services/            # Handles database queries
│   ├── studentService.js
│   └── ...
├── .env                 # Environment variables (not committed to version control)
├── .env.local           # Template for environment variables
└── server.js            # Entry point for setting up and running the server
```

### **Key Files and Folders**

1. **controllers/**: Contains files that handle business logic, like validation and response structuring.
2. **db/connect.js**: Initializes the Prisma client to connect to the Supabase database.
3. **prisma/**: Holds Prisma schema (`schema.prisma`) and migrations.
4. **routes/**: Defines API endpoints and links them to controllers (e.g., `/students` endpoints in `studentRoutes.js`).
5. **services/**: Responsible for database queries, decoupling business logic from database integration.
6. **server.js**: Main server setup and configuration.

## **4. Core Features**

- **CRUD Operations**:
  - **Create**: Add new students and their details.
  - **Read**: Retrieve student information and course details.
  - **Update**: Modify existing student details or enrolled courses.
  - **Delete**: Remove student records.
- **Prisma ORM**: Simplifies interaction with the Supabase database through a type-safe and intuitive API.
- **Separation of Concerns**: 
  - Controllers manage business logic.
  - Services handle database integration, ensuring flexibility to change the database in the future without altering the logic.

## **5. Live Deployment**

The Node.js server is deployed on **Railway**.  

## **6. How to Set Up the Server**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Kanha-13/StudentsDashboard_nodeapp.git
   cd StudentsDashboard_nodeapp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create and Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Copy the variables from `.env.local` into the `.env` file.
   - Update the variables with your Supabase database connection details.

4. **Run Migrations**:
   - Ensure your Supabase database is set up.
   - Run the Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```

5. **Start the Server**:
   ```bash
   npm start
   ```

6. **Test the APIs**:
   - Use tools like Postman or cURL to test endpoints (e.g., `/students`, `/login`).

## **7. Additional Notes**

- **Separation of Logic and Database**: 
  The `services/` folder ensures a clean separation between the database logic and business logic. This makes the app maintainable and adaptable to future database changes.
- **Prisma for Supabase**:
  Using Prisma ORM simplifies database queries and provides type safety, reducing potential runtime errors.
