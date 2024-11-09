const express = require('express');
const bodyParser = require('body-parser');
const MWHQRoutes = require('./routes/MWHQRoutes');
const swagger = require('./swagger');
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', MWHQRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the MechwarriorHQ API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});