const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const characterRoutes = require('./routes/characterRoutes');

// App definition and port
const app = express();
const port = 2000;

app.use(express.json());

// Connect to the database
connectDB();

// App use declarations + Route declarations
app.use(express.json());
app.use('/items', itemRoutes); // Ensure this line is correct
app.use('/characters', characterRoutes); // Ensure this line is correct

app.get('/', (req, res) => {
    res.send({ message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});

module.exports = app;

