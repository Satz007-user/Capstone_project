const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Capstone Project</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
                h1 { color: #2c3e50; }
                ul { background: #f9f9f9; padding: 20px; border-radius: 5px; }
                li { margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <h1>DevOps Capstone Project</h1>
            <p><strong>Author:</strong> Sathyamurthy B</p>
            <p><strong>Year:</strong> 2026</p>
            <h3>Pipeline Stages:</h3>
            <ul>
                <li><strong>1. Source Control:</strong> GitHub repository stores application code and triggers Jenkins builds automatically via Webhooks.</li>
                <li><strong>2. CI/CD Orchestration:</strong> Jenkins automates code checkout, Docker containerization, and SSH deployment tasks.</li>
                <li><strong>3. Registry & Hosting:</strong> Images are stored on Docker Hub and deployed onto an AWS EC2 Ubuntu instance using Docker containers.</li>
                <li><strong>4. Monitoring & Observability:</strong> Prometheus scrapes metrics via Node Exporter on port 9100 and visualizes system health on Grafana dashboards.</li>
            </ul>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
