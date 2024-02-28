const axios = require('axios');
require('dotenv').config(); 

const connection = axios.create({
  baseURL: 'https://api.monday.com/v2/',
  headers: {
    Authorization: `Bearer ${process.env.MONDAY_API_KEY}`,
  },
});

module.exports = connection;
