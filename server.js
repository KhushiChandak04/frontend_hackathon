const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route for organizer_opportunities.html
app.get('/organizer_opportunities.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'organizer_opportunities.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
