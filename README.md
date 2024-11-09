# My React Web Project

This project is a web application built using React.js, Tailwind CSS, and a MariaDB database. It serves as a basic scaffold for developing modern web applications.

## Project Structure

mechwarriorhq
├── public
│   ├── index.html         # Main HTML file
│   └── favicon.ico        # Favicon for the web application
├── src
│   ├── components         # React components
│   │   └── ExampleComponent.jsx
│   ├── pages              # Application pages
│   │   └── HomePage.jsx
│   ├── styles             # CSS styles
│   │   └── index.css
│   ├── App.jsx            # Main App component
│   └── index.js           # Entry point for the React application
├── server                 # Backend server
│   ├── db
│   │   └── connection.js  # Database connection
│   ├── models
│   │   └── MWHQModel.js # Database model
│   ├── routes
│   │   └── MWHQRoutes.js # API routes
│   └── server.js          # Entry point for the server
├── package.json           # npm configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── .env                   # Environment variables
└── README.md              # Project documentation

## Setup Instructions

1. **Clone the repository:**
   git clone https://github.com/gr33my/mwhq.git mechwarriorhq
   cd mechwarriorhq

2. **Install dependencies:**
   npm install

3. **Set up the database:**
   - Create a MariaDB database and update the `.env` file with the connection details.

4. **Run the server:**
   cd server
   node server.js

5. **Run the React application:**
   cd src
   npm start

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Modify components in the `src/components` directory to customize the UI.
- Update the backend logic in the `server` directory as needed.

## License

This project is licensed under the MIT License.