# Track-Daily

Track-Daily is a web application designed to help users manage their daily tasks effectively while allowing administrators to manage users. This project was a significant learning experience for the team as it involved implementing distinct roles (User and Admin) for both the UI and backend.

## Features

### User Role:
- **Task Management:**
  - Create a new task.
  - Edit an existing task.
  - Delete a task.
  - View all tasks.
- **Profile Management:**
  - View personal profile.
  - Edit profile details.

### Admin Role:
- **User Management:**
  - View all users.
  - Delete a user.

## State Management
- **Redux**: Used for managing user state.
- **Zustand**: Used for managing task state.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: Redux, Zustand

## Setup and Installation

### Prerequisites:
- Node.js (v16 or later)
- npm or yarn
- MongoDB

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/fanelob46/Track-Daily.git
   cd track-daily

2. Install dependencies for both frontend and backend:
### For the backend
cd backend
npm install

### For the frontend
cd ../frontend
npm install

3. Set up environment variables:
 - Create a .env file in both the backend and frontend folders.
 - Add the required environment variables:
  ### For the backend:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000

4. Run the application:
### Start the backend server
cd backend
npm run server

### Start the frontend
cd ../frontend
npm run dev

5. Access the application at http://localhost:3000.

## Project Structure
### Backend
- Routes: Handles API endpoints for users and tasks.
- Controllers: Contains logic for CRUD operations and role-specific functionalities.
- Models: Defines schemas for users and tasks.
  
### Frontend
- Components: Modular and reusable UI components.
- Pages: Specific views for users and admin roles.
- State Management: Redux for user states and Zustand for tasks.

## Lessons Learned
Implementing role-based access control for both UI and backend.
Leveraging multiple state management tools (Redux and Zustand) in a single project.
Efficiently managing CRUD operations for different user roles.

