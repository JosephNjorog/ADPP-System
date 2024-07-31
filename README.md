# AI-Powered Disease Outbreak Prediction and Prevention System

Welcome to the AI-Powered Disease Outbreak Prediction and Prevention System, a comprehensive solution leveraging AI and blockchain technology to predict and prevent disease outbreaks. This system utilizes the Internet Computer Protocol (ICP) for decentralized data storage, secure computations, and real-time analysis to enhance public health surveillance and response.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Docker Setup](#docker-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The AI-Powered Disease Outbreak Prediction and Prevention System is designed to help healthcare organizations and governments predict potential disease outbreaks and implement preventive measures. By integrating AI models for prediction and blockchain technology for secure data handling, this system aims to provide accurate, real-time information for effective public health management.

## Features
- **Real-Time Disease Prediction**: Utilizes advanced AI algorithms to predict disease outbreaks.
- **Secure Data Storage**: Employs ICP for decentralized and secure data storage.
- **User Authentication**: Robust user authentication system with registration and login capabilities.
- **Data Visualization**: Interactive dashboards for visualizing data and predictions.
- **Alert System**: Sends notifications and alerts for potential disease outbreaks.
- **Scalable Architecture**: Designed to handle large volumes of data and scale efficiently.

## Technology Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, ICP (Internet Computer Protocol)
- **AI/ML**: Custom AI models for disease prediction
- **Authentication**: JWT (JSON Web Tokens)
- **Containerization**: Docker, Docker Compose

## Project Structure
```plaintext
.
├── backend
│   ├── .env
│   ├── README.md
│   ├── src
│   │   ├── app.js
│   │   ├── canisters
│   │   │   ├── alert_system.mo
│   │   │   ├── data_preprocessing.mo
│   │   │   ├── prediction_engine.mo
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── dataController.js
│   │   │   ├── predictionController.js
│   │   ├── middleware
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   ├── models
│   │   │   ├── DataRecord.js
│   │   │   ├── Prediction.js
│   │   │   ├── User.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   ├── dataRoutes.js
│   │   │   ├── predictionRoutes.js
│   │   ├── server.js
│   │   ├── services
│   │   │   ├── authService.js
│   │   │   ├── dataService.js
│   │   │   ├── predictionService.js
│   │   ├── utils
│   │   │   ├── db.js
│   │   │   ├── logger.js
├── docker-compose.yml
├── frontend
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── docker-compose.yml
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.jsx
│   │   ├── App.test.js
│   │   ├── assets
│   │   │   ├── styles.css
│   │   ├── components
│   │   │   ├── admin
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   ├── alerts
│   │   │   │   ├── AlertDetails.jsx
│   │   │   │   ├── AlertList.jsx
│   │   │   ├── analytics
│   │   │   │   ├── AnalyticsDashboard.jsx
│   │   │   ├── auth
│   │   │   │   ├── Login.jsx
│   │   │   ├── common
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── PrivateRoute.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   ├── data
│   │   │   │   ├── DataUpload.jsx
│   │   │   │   ├── DataVisualization.jsx
│   │   │   ├── map
│   │   │   │   ├── OutbreakMap.jsx
│   │   │   ├── notifications
│   │   │   │   ├── NotificationCenter.jsx
│   │   │   ├── predictions
│   │   │   │   ├── PredictionDashboard.jsx
│   │   │   │   ├── PredictionDetails.jsx
│   │   │   │   ├── PredictionForm.jsx
│   │   │   ├── user
│   │   │   │   ├── UserProfile.jsx
│   │   ├── contexts
│   │   │   ├── AuthContext.jsx
│   │   ├── hooks
│   │   │   ├── useAuth.jsx
│   │   │   ├── useFetchData.jsx
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   ├── reportWebVitals.js
│   │   ├── services
│   │   │   ├── alertService.js
│   │   │   ├── authService.js
│   │   │   ├── dataService.js
│   │   │   ├── predictionService.js
│   │   ├── setupTests.js
│   │   ├── utils
│   │   │   ├── api.js
│   │   │   ├── constants.js
```

## Setup Instructions

### Prerequisites
- Node.js and npm
- Docker and Docker Compose
- MongoDB

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file based on the `.env.example` and fill in the necessary environment variables.
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

### Docker Setup
1. Ensure Docker and Docker Compose are installed on your system.
2. From the root directory of the project, run:
   ```sh
   docker-compose up --build
   ```

## Usage
Once the setup is complete, you can access the application through your web browser at `http://localhost:3000`. Use the following credentials to log in or create a new account if required.

## API Endpoints
The backend provides several RESTful API endpoints for interacting with the system. Below are some of the key endpoints:

- **Authentication**
  - `POST /auth/register` - Register a new user
  - `POST /auth/login` - Login a user
  - `POST /auth/logout` - Logout a user

- **Data**
  - `GET /data` - Fetch all data records
  - `POST /data` - Upload new data

- **Predictions**
  - `GET /predictions` - Fetch all predictions
  - `POST /predictions` - Create a new prediction

- **Alerts**
  - `GET /alerts` - Fetch all alerts
  - `POST /alerts`

 - Create a new alert

## Contributing
We welcome contributions from the community. If you wish to contribute, please fork the repository and create a pull request with your changes. Ensure your code follows the existing coding standards and is well-documented.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
