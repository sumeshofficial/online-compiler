# Online Compiler

A full-stack **online code compiler** that allows users to write, run, and view the output of code directly in the browser.  
The project supports multiple programming languages and executes code securely using Docker containers.

---

## Features

### Editor
- Monaco Code Editor (VS Code editor in the browser)
- Syntax highlighting
- Language switching
- Responsive layout

### Code Execution
- Run code directly from the browser
- Output panel with error handling
- Loading indicator while execution runs
- Clear output functionality

### Supported Languages
- JavaScript
- Python
- C++

### Backend Execution
- Secure sandbox execution using **Docker**
- Resource limits for memory and CPU
- Timeout protection for infinite loops
- Temporary file generation for execution

---

## Tech Stack

### Frontend
- React
- Vite
- TailwindCSS
- Material UI
- TanStack Query
- Zustand
- Monaco Editor

### Backend
- Node.js
- Express
- Docker
- Zod (validation)
- Pino (logging)

---

## Project Structure

```
online-compiler
│
├── client
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   └── store
│
├── server
│   ├── controllers
│   ├── runners
│   ├── routes
│   ├── middleware
│   ├── utils
│   └── config
│   └── temp
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/sumeshofficial/online-compiler.git
cd online-compiler
```

---

### 2. Install dependencies

Frontend

```
cd client
npm install
```

Backend

```
cd server
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** directory. You can use the provided `env.example` file as a template to create your environment variables.

Example:

```
PORT=5000
NODE_ENV=development
LOG_LEVEL=info
```

Frontend `.env` example:

```
VITE_API_URL=http://localhost:5000/api
```

---

## Running the Project

### Start Backend

```
cd server
npm run dev
```

### Start Frontend

```
cd client
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## Docker Execution

### Docker Setup (Required)

This project executes user code inside **Docker containers** for security and isolation.

Before running the project, make sure **Docker is installed and running** on your system.

1. Install Docker from:  
https://www.docker.com/get-started

2. Start Docker Desktop.

3. Pull the required runtime images to avoid cold start delays during the first execution:

```
docker pull node:18
docker pull python:3.10
docker pull gcc:latest
```

Pulling these images in advance ensures faster code execution when running the compiler locally.

Code execution is handled inside Docker containers to ensure isolation.

Example Docker run configuration:

- Memory limit
- CPU limit
- No network access
- Temporary execution environment

---

## API Endpoint

### Run Code

```
POST /api/execute
```

Request body:

```
{
  "language": "javascript",
  "code": "console.log('Hello World')"
}
```

Response:

```
{
  "output": "Hello World"
}
```

---

## Future Improvements

- Code input support (stdin)
- Execution history
- Multiple file tabs
- Authentication system
- Code sharing links


---

## Contributing

Contributions are welcome! 🎉

If you'd like to improve this project, feel free to:

- Fork the repository
- Create a new feature branch
- Make your changes
- Submit a Pull Request

You can contribute by:
- Adding support for more programming languages
- Improving the UI/UX
- Enhancing sandbox security
- Fixing bugs or improving performance
- Adding new features

Please ensure your code follows the existing project structure and coding standards.

Thank you for helping improve this project!

## Author

**Sumesh J**

GitHub:  
https://github.com/sumeshofficial

---

## License

This project is open-source and available under the MIT License.