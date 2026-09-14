const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Capstone Project</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                body { background-color: #f4f6f9; color: #333; line-height: 1.6; padding: 40px 20px; }
                .container { max-width: 900px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
                .header { border-bottom: 2px solid #eaedd0; padding-bottom: 20px; margin-bottom: 30px; display: flex; align-items: center; justify-content: space-between; }
                .header h1 { color: #1a252f; font-size: 28px; }
                .status-badge { background-color: #28a745; color: white; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 14px; }
                .section-title { color: #2c3e50; font-size: 20px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
                .description { font-size: 16px; color: #555; margin-bottom: 30px; }
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
                .card { background: #f8f9fa; border-left: 4px solid #007bff; padding: 20px; border-radius: 6px; }
                .card h3 { font-size: 16px; color: #007bff; margin-bottom: 8px; }
                .card p { font-size: 14px; color: #666; }
                .footer { text-align: center; color: #888; font-size: 13px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>DevOps Capstone Project</h1>
                    <span class="status-badge">Live on AWS EC2</span>
                </div>

                <p class="section-title">Project Definition</p>
                <p class="description">
                    This web application demonstrates an automated End-to-End Continuous Integration and Continuous Deployment (CI/CD) pipeline built using Jenkins, Docker, GitHub, and AWS EC2.
                </p>

                <p class="section-title">Pipeline Architecture</p>
                <div class="grid">
                    <div class="card">
                        <h3>1. Source Control</h3>
                        <p>GitHub repository stores application code and triggers Jenkins builds automatically via Webhooks.</p>
                    </div>
                    <div class="card">
                        <h3>2. CI/CD Orchestration</h3>
                        <p>Jenkins automates code checkout, Docker containerization, and SSH deployment tasks.</p>
                    </div>
                    <div class="card">
                        <h3>3. Registry & Hosting</h3>
                        <p>Images are stored on Docker Hub and deployed onto an AWS EC2 Ubuntu instance using Docker containers.</p>
                    </div>
                </div>

                <div class="footer">
                    Maintained by Sathyamurthy B &bull; Capstone Project 2026
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
