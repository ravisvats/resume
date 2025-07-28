import React from 'react';
import { Link } from 'react-router-dom';

const Blog5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              ← Back to Blogs
            </Link>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              FastAPI
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              AWS EC2
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Deployment
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Deploying FastAPI Backend to EC2
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Step-by-step guide to hosting your FastAPI backend on an AWS EC2 instance with NGINX and systemd.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>December 20, 2023</span>
            <span>•</span>
            <span>11 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          
          <img 
            src="/images/fastapiblog.png" 
            alt="FastAPI EC2 Deployment" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            FastAPI has quickly become one of the most popular Python frameworks for building APIs. Its automatic API documentation, 
            high performance, and modern Python features make it an excellent choice for production applications. 
            In this guide, we'll walk through deploying a FastAPI application to AWS EC2 with a production-ready setup.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Prerequisites</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>An AWS account with EC2 access</li>
            <li>A FastAPI application ready for deployment</li>
            <li>Basic familiarity with Linux command line</li>
            <li>SSH key pair for EC2 access</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 1: Launch EC2 Instance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            First, let's set up our EC2 instance:
          </p>
          
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li>Go to AWS EC2 console and click "Launch Instance"</li>
            <li>Choose Ubuntu Server 22.04 LTS (recommended)</li>
            <li>Select instance type (t3.micro for testing, t3.small+ for production)</li>
            <li>Configure security group to allow HTTP (80), HTTPS (443), and SSH (22)</li>
            <li>Launch with your SSH key pair</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 2: Server Setup</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Connect to your instance and set up the environment:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Python and pip
sudo apt install python3 python3-pip python3-venv -y

# Install NGINX and other tools
sudo apt install nginx supervisor git -y

# Create application directory
sudo mkdir -p /var/www/myapp
sudo chown $USER:$USER /var/www/myapp`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 3: Deploy Your FastAPI App</h2>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Clone your repository
cd /var/www/myapp
git clone https://github.com/yourusername/your-fastapi-app.git .

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Install Gunicorn for production server
pip install gunicorn`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 4: Configure Gunicorn</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create a Gunicorn configuration file:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Create gunicorn.conf.py
cat > /var/www/myapp/gunicorn.conf.py << 'EOF'
bind = "127.0.0.1:8000"
workers = 4
worker_class = "uvicorn.workers.UvicornWorker"
timeout = 30
keepalive = 2
max_requests = 1000
max_requests_jitter = 50
preload_app = True
EOF`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 5: Create Systemd Service</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Set up a systemd service for automatic startup and process management:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Create systemd service file
sudo cat > /etc/systemd/system/fastapi.service << 'EOF'
[Unit]
Description=FastAPI application
After=network.target

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/var/www/myapp
Environment=PATH=/var/www/myapp/venv/bin
ExecStart=/var/www/myapp/venv/bin/gunicorn -c gunicorn.conf.py main:app
ExecReload=/bin/kill -s HUP $MAINPID
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable fastapi
sudo systemctl start fastapi
sudo systemctl status fastapi`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 6: Configure NGINX</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Set up NGINX as a reverse proxy:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Create NGINX configuration
sudo cat > /etc/nginx/sites-available/fastapi << 'EOF'
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain
    
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffering off;
    }
}
EOF

# Enable the site
sudo ln -s /etc/nginx/sites-available/fastapi /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and restart NGINX
sudo nginx -t
sudo systemctl restart nginx`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 7: SSL with Let's Encrypt</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Secure your API with free SSL certificates:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Install Certbot
sudo apt install snapd
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Test automatic renewal
sudo certbot renew --dry-run`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Production Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🔧 Performance</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>Use appropriate worker count (2x CPU cores)</li>
                <li>Enable gzip compression in NGINX</li>
                <li>Set up caching for static content</li>
                <li>Monitor resource usage</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">🔒 Security</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Keep system packages updated</li>
                <li>Use security groups restrictively</li>
                <li>Set up fail2ban for SSH protection</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Maintenance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Set up basic monitoring and logging:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Check service status
sudo systemctl status fastapi
sudo systemctl status nginx

# View logs
sudo journalctl -u fastapi -f
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Restart services
sudo systemctl restart fastapi
sudo systemctl reload nginx`}</pre>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "A well-deployed FastAPI application with proper monitoring and security measures can handle production workloads reliably. 
              Remember to regularly update and monitor your deployment for optimal performance."
            </p>
          </div>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center gap-4">
            <img 
              src="/src/assets/ravi_passport.jpeg" 
              alt="Ravi Vats" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">Ravi Vats</h4>
              <p className="text-gray-600 text-sm">Full-stack developer with expertise in Python backend development and AWS deployments.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link to="/blogs/blog4" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            ← Previous Article
          </Link>
          <Link to="/blogs/blog6" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            Next Article →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blog5; 