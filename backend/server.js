const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/mainApiRoutes');

dotenv.config();

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/tft', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
