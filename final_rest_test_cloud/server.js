const app = require('./app');
const express = require("express");
const itemRoutes = require("./routes/itemRoutes");
const characterRoutes = require("./routes/characterRoutes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/items', itemRoutes); // Ensure this line is correct
app.use('/characters', characterRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
