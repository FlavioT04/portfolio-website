# Portfolio Website

Personal portfolio website built with React, Node.js, Express, and Docker, and hosted with AWS EC2.

Live at: https://flaviomt.com

## Tech Stack

- **React** — frontend UI
- **Node.js / Express** — backend server
- **Docker** — containerization
- **AWS EC2** — hosting

## Running Locally

### With Node.js

```bash
npm install
npm run dev
```

Open http://localhost:5173

### With Docker

**ARM Processors:**
```bash
docker build --platform linux/amd64 -t portfolio .
docker run -p 3000:3000 portfolio
```

**x86-64 Processors:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Open http://localhost:3000
