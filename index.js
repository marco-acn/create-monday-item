const express = require('express');
const cors = require('cors');
const monday = require('./routes/mondayRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/monday', monday);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Promise Rejection:');
    console.error(reason);
});
  
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:');
    console.error(error);
});