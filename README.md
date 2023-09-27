# Next.js Blog with NextAuth.js, Prisma, and Firebase

![Project Preview](./client/src/assets/preview.png)

A modern and feature-rich blog application built with Next.js, NextAuth.js for authentication, Prisma as the database ORM, and Firebase for storage and other features.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with NextAuth.js and Firebase.
- Create, edit, and delete blog posts.
- Categorize posts and manage categories.
- Real-time comments with Firebase Realtime Database.
- User profile management.
- Responsive design for various screen sizes.
- SEO optimization.
- Fast and optimized performance.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB or another supported Prisma database setup.
- Firebase account for storage and authentication.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alphadev97/blog97
   cd blog97
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Create a .env.local file in the root of your project and add the necessary environment variables. You can refer to the .env.example file for guidance.

   ```.env
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   NEXTAUTH_URL=
   NEXTAUTH_SECRET=
   DATABASE_URL=
   FIREBASE=
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:3000 to access the application.

## Contributing

Contributions are welcome! Please create a pull request or open an issue if you encounter any bugs or have suggestions for improvements.

## License

This project is licensed under the [MIT License](./LICENSE).
