const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Capstone Project</title>
            <style>
                :root {
                    --bg-color: #0f172a;
                    --card-bg: #1e293b;
                    --text-color: #e2e8f0;
                    --text-muted: #94a3b8;
                    --accent-color: #38bdf8;
                    --border-color: #334155;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    margin: 0;
                    padding: 40px 20px;
                    display: flex;
                    justify-content: center;
                }
                .container {
                    max-width: 800px;
                    width: 100%;
                }
                header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                h1 {
                    color: #f8fafc;
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }
                .metadata {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }
                .metadata span {
                    background: var(--card-bg);
                    padding: 6px 14px;
                    border-radius: 20px;
                    border: 1px solid var(--border-color);
                }
                .stages-grid {
                    display: grid;
                    gap: 20px;
                }
                .stage-card {
                    background-color: var(--card-bg);
                    border: 1px solid var(--border-color);
                    padding: 20px 24px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s ease, border-color 0.2s ease;
                }
                .stage-card:hover {
                    transform: translateY(-2px);
                    border-color: var(--accent-color);
                }
                .stage-title {
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--accent-color);
                    margin-bottom: 8px;
                }
                .stage-desc {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.5;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header>
                    <h1>DevOps Capstone Project</h1>
                    <div class="metadata">
                        <span><strong>Author:</strong> Sathyamurthy B</span>
                        <span><strong>Year:</strong> 2026</span>
                    </div>
                </header>
                
                <div class="stages-grid">
                    <div class="stage-card">
                        <div class="stage-title">1. Source Control</div>
                        <p class="stage-desc">GitHub repository stores application code and triggers Jenkins builds automatically via Webhooks.</p>
                    </div>
                    <div class="stage-card">
                        <div class="stage-title">2. CI/CD Orchestration</div>
                        <p class="stage-desc">Jenkins automates code checkout, Docker containerization, and SSH deployment tasks.</p>
                    </div>
                    <div class="stage-card">
                        <div class="stage-title">3. Registry & Hosting</div>
                        <p class="stage-desc">Images are stored on Docker Hub and deployed onto an AWS EC2 Ubuntu instance using Docker containers.</p>
                    </div>
                    <div class="stage-card">
                        <div class="stage-title">4. Monitoring & Observability</div>
                        <p class="stage-desc">Prometheus scrapes metrics via Node Exporter on port 9100 and visualizes system health on Grafana dashboards.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
