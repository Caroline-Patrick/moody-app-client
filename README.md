# Moody

Moody is a web application designed to help users improve their emotional literacy. Inspired by Brené Brown's "Atlas of the Heart", the app allows users to track and analyze their emotions, fostering self-awareness and emotional understanding. Built using React on the frontend, the app connects to a backend powered by Node.js and Express. The Material-UI library provides a sleek and modern design.

## Features

- Interactive Emotion Wheel for selecting emotions (powered by amCharts)
- Customizable mood logs for tracking emotions, thoughts, and experiences
- Visualization of mood data over time
- User authentication and profile management
- Integration with DictionaryAPI.com for emotion descriptions and definitions
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (v14.x.x recommended)
- npm (v6.x.x recommended)
- MySQL (if running locally)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/mood-tracker.git
```

2. Install the required dependencies in the frontend and backend folders:
```
cd mood-tracker/frontend
npm install

cd ../backend
npm install
```

3. Create a `.env` file in the `backend` directory with the following environment variables:
```
DB_HOST=<your_mysql_host>
DB_USER=<your_mysql_user>
DB_PASSWORD=<your_mysql_password>
DB_DATABASE=<your_mysql_database>
DB_PORT=<your_port>

API_KEY_COLLEGIATE=<your_dictionaryapi.com_api_key>
```

4. Start the backend server:
```
cd backend
npm run start
```

5. Start the frontend development server:
```
cd frontend
npm start
```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Material-UI](https://mui.com/)
- [amCharts](https://www.amcharts.com/)
- [DictionaryAPI.com](https://www.dictionaryapi.com/)

## Contributing

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with a descriptive message.
5. Push your branch to your fork on GitHub.
6. Create a pull request to the original repository.


## Acknowledgments

- Brené Brown and her work on emotional literacy in "Atlas of the Heart"
- Material-UI for providing a powerful and flexible styling library
- amCharts for the interactive and dynamic emotion wheel
- DictionaryAPI.com for providing emotion descriptions and definitions
- The React and Node.js communities for their support and resources