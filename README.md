# Blog Management System

## Description
The Blog Management System is a web application designed to streamline the creation, management, and publication of blog posts. It offers an intuitive interface for administrators and authors to create, edit, and delete blog posts. The system also includes features for user authentication, content management, categories, tags, and comments.

## Tools & Technologies Used
- **Front-end:** HTML, CSS, JavaScript
- **Back-end:** PostgreSQL

## Features
1. **User Authentication**
    - Secure login and registration for users.
    - Role-based access control for administrators and authors.

2. **Content Management**
    - Create, edit, and delete blog posts.
    - Rich text editor for formatting blog content.
    - Image upload and management.

3. **Categories and Tags**
    - Organize posts into categories.
    - Add tags to posts for better searchability.

4. **Comments**
    - Enable readers to leave comments on posts.
    - Manage and moderate comments.

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/shourysingh07/blog-management-system.git
    cd blog-management-system
    ```

2. **Set up the PostgreSQL Database:**
    - Create a new database called `blog_management_system`.
    - Create a .env file inside the api folder as 
    &emsp;&emsp;DB_NAME=   
    &emsp;&emsp;DB_USER=  
    &emsp;&emsp;DB_PASS=  
    &emsp;&emsp;DB_HOST=  
    &emsp;&emsp;DB_PORT=  
    &emsp;&emsp;JWT_SECRET=  
    &emsp;&emsp;PORT= file.

3. **Install dependencies:**
    - Ensure you have Node.js and npm installed.
    - Navigate to the project directory and run:

      ```bash
      cd client
      ```
      ```bash
      npm install
      ```
      ```bash
      cd api
      ```
      ```bash
      npm install
      ```

4. **Run the application:**
    - Start the backend server:

      ```bash
      npm start
      ```
    - Start the frontend server:

      ```bash
      npm run dev
      ```



## Usage
1. **Access the application:**
    - Open your web browser and navigate to `http://localhost:3000`.

2. **Register and login:**
    - Register a new account or log in with an existing account.

3. **Manage posts:**
    - Use the dashboard to create, edit, and delete posts.
    - Organize posts with categories and tags.

4. **Moderate comments:**
    - Approve, edit, or delete comments left by readers.