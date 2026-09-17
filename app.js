// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'DevOps Capstone Project',
        author: 'Sathyamurthy B',
        year: '2026',
        // "Live on AWS EC2" badge has been removed
        pipelineStages: [
            {
                step: '1. Source Control',
                description: 'GitHub repository stores application code and triggers Jenkins builds automatically via Webhooks.'
            },
            {
                step: '2. CI/CD Orchestration',
                description: 'Jenkins automates code checkout, Docker containerization, and SSH deployment tasks.'
            },
            {
                step: '3. Registry & Hosting',
                description: 'Images are stored on Docker Hub and deployed onto an AWS EC2 Ubuntu instance using Docker containers.'
            },
            {
                step: '4. Monitoring & Observability',
                description: 'Prometheus scrapes metrics via Node Exporter on port 9100 and visualizes system health on Grafana dashboards.'
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
