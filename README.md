# 🎮 Timepass Games API

A simple Node.js + Express.js backend service to manage games (CRUD).  
It uses MongoDB for data storage and provides a full REST API along with Swagger documentation.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **API Docs**: Swagger (OpenAPI 3.0)
- **Deployment**: Render.com
- **Version Control**: Git + GitHub

---

## 🚀 Live Demo

- **API Base URL**: [`https://timepass-games-w475.onrender.com/api/games`](https://timepass-games-w475.onrender.com/api/games)
- **Swagger Docs**: [`https://timepass-games-w475.onrender.com/api-docs`](https://timepass-games-w475.onrender.com/api-docs)

---

## 📁 Game Schema

```json
{
  "name": "string",
  "url": "string",
  "author": "string",
  "publishedDate": "date"
}

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| POST   | `/api/games`     | Create a game    |
| GET    | `/api/games`     | Get all games    |
| GET    | `/api/games/:id` | Get a game by ID |
| PUT    | `/api/games/:id` | Update a game    |
| DELETE | `/api/games/:id` | Delete a game    |
