const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MWHQRoutes = require('./routes/MWHQRoutes');
const swagger = require('./swagger');
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api', MWHQRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the MechwarriorHQ API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});