const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>DevOps Capstone Web Application Running Live on AWS EC2!</h1>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
