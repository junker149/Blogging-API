# Blogging-API

## 📖 About the Project

A brief description of your project:  
- This API lets you create, delete, update and view blog posts in the database.
- I built it for me, to help me learn the technologies I used in this project.And you can *obviously* use this API for your usecase.
- To Learn.

---

## 🛠️ Features

- Create blog posts.
- Update any existing blog post.
- Delete any existing blog post.
- View all blog post.
- View a single blog post.
- View blog posts with search feature to get a wildcard search on title, content and tags of the posts.

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express, Prisma, PostgreSQL, Typescript, Zod

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- PostgreSQL
- Prisma CLI

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/junker149/Blogging-API.git

2. Navigate to project directory:
    ```bash
    cd Blogging-API

3. Install dependencies:
    ```bash
    npm install

4. Create a ```.env``` file in the root directory and add:
    ```bash
    DATABASE_URL=your_database_url
    
5. Run database migrations:
    ```bash
    npx prisma migrate dev

6. Start the server:
    ```bash
    npm run dev