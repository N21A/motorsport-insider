# motorsport-insider
**Motorsport Insider** is a web application designed to search for and display the latest press releases from motorsport media centres worldwide. Users can filter news by continent, ensuring they stay updated with the latest developments in their region of interest.

## Features
- **Real-time updates:** **Motorsport Insider** will fetch and display the latest press releases from selected sources around the world.
- **Search functionality:** **Motorsport Insider** will allow users to search for specific news items using keywords.
- **Filter by continent:** **Motorsport Insider** can filter press releases based on continent (e.g. Asia, Europe, North America).
- **Clean and minimalist design:** **Motorsport Insider** emphasises functionality, ensuring a seamless user experience.
- **Responsive layout:** **Motorsport Insider** has a clean, fast, and responsive layout on both desktop and mobile devices.

## Technologies used
- **Front-end:** HTML, CSS, JavaScript (React)
- **Back-end:** Node.js (Express)
- **Database:** SQLite (for development) / PostgreSQL or MonoDB (for production)
- **Deployment:** GitHub Pages (for front-end), Heroku/AWS/DigitalOcean (for back-end).

## Setup instructions

### Prerequisites
Ensure you have the following installed on your system:
- Node.js and npm (https://nodejs.org)
- Git (https://git-scm.com)

### Frontend setup
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/motorsport-insider.git
    cd motorsport-insider
    ```
2. **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
4. **Start the frontend development server:**
    ```sh
    npm start
    ```
    The frontend server will start on `http://localhost:3000`.

### Backend setup
1. **Navigate to the backend directory:**
    ```sh
    cd ../backend
    ```
2. **Create an `.env` file for environment variables:**
    ```sh
    touch .env # type nul > .env, if using a Windows system
    ```
    Add the following line to the `.env` file:
    ```plaintext
    PORT=5000
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
4. **Start the backend server:**
    ```sh
    node server.js
    ```
    The backend server will start on `http://localhost:5000`.

### Database setup
The SQLite database will be created in memory for development purposes. The schema and initial data will be set up automatically when the backend server starts.

### Connecting frontend and backend
The frontend application will make API calls to the backend server to fetch data. Ensure both servers are running:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Contributions
We welcome contributions! Please fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Licences
This project is licenced under the MIT Licence.

## Contact
For any questions or feedback, please open an issue or reach out to me directly.
