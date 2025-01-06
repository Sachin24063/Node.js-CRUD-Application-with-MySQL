# Node.js CRUD Application with MySQL

This is a simple Node.js application that performs **CRUD (Create, Read, Update, Delete)** operations using **MySQL** as the database. The application is built with **Node.js**, **Express**, and **MySQL**, and includes a basic **UI** that runs on port `3000`.

## Features

- **Add User**: Allows you to add new users.
- **View Users**: Lists all the users in the database.
- **Update User**: Allows you to update existing user details.
- **Delete User**: Deletes a user from the database.

## UI Preview

The application provides a simple user interface to interact with the CRUD operations. Below is a screenshot of the UI layout:

![UI Layout](img.jpg)

## Technologies Used

- **Node.js** - Backend JavaScript runtime environment.
- **Express** - Web framework for Node.js.
- **MySQL** - Database for storing user data.
- **HTML** - For the UI layout.
- **CSS** - Basic styling for the UI.
- **JavaScript** - For frontend logic and API communication.

## Installation

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- A text editor (e.g., [VSCode](https://code.visualstudio.com/)).

### Steps to Run the Application

1. **Clone the repository** to your local machine.

```bash
git clone https://github.com/your-username/node-mysql-crud.git
cd node-mysql-crud
```
2. **Install the dependencies.

```bash
npm install
```
3. **Create the .env file in the root directory with your MySQL database credentials.

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=crud_app
```
4. **Set up the MySQL database.
5. 
Log in to your MySQL shell:
```bash
mysql -u root -p
```

Create the database and the users table:
```bash
CREATE DATABASE crud_app;

USE crud_app;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```
5. **Start the Node.js server.

```bash
node server.js
```
6. **Access the application.
7. 
Open a web browser and navigate to:
```bash
http://localhost:3000
```
