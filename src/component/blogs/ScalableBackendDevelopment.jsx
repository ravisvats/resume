import React from 'react';
import { Link } from 'react-router-dom';

const Blog6 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
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
      </div> */}

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              Architecture
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Backend
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Best Practices
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Best Practices for Scalable Backend Development
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Explore key architectural patterns and tools for building clean, modular, and production-ready backends.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>December 15, 2023</span>
            <span>•</span>
            <span>13 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          
          <img 
            src="/images/scalableblog.png" 
            alt="Scalable Backend Development" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Building scalable backend systems is both an art and a science. It requires careful consideration of architecture, 
            technology choices, and development practices that will serve your application well as it grows from handling hundreds 
            to millions of users. This guide covers the essential patterns and practices for building production-ready backends.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Architectural Principles</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Separation of Concerns</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Organize your code into distinct layers with clear responsibilities:
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <ul className="text-blue-800 space-y-2">
              <li><strong>Presentation Layer:</strong> API endpoints, request/response handling</li>
              <li><strong>Business Logic Layer:</strong> Core application logic and rules</li>
              <li><strong>Data Access Layer:</strong> Database interactions and data persistence</li>
              <li><strong>Infrastructure Layer:</strong> External services, logging, monitoring</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Dependency Injection</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use dependency injection to create loosely coupled, testable components:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Good: Dependency injection
class UserService {
  constructor(private userRepo: UserRepository) {}
  
  async createUser(userData: CreateUserDto) {
    // Validation logic
    return this.userRepo.save(userData);
  }
}

// Usage with DI container
const userRepo = new UserRepository();
const userService = new UserService(userRepo);`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Database Design Patterns</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Repository Pattern</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Abstract database operations behind repository interfaces:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}

class PostgresUserRepository implements UserRepository {
  // Database-specific implementation
}`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Query Optimization</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">✅ Best Practices</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Use appropriate indexes</li>
                <li>Implement query pagination</li>
                <li>Avoid N+1 query problems</li>
                <li>Use connection pooling</li>
                <li>Monitor slow queries</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ Avoid</h4>
              <ul className="text-red-800 text-sm space-y-2">
                <li>SELECT * queries</li>
                <li>Queries in loops</li>
                <li>Missing indexes on foreign keys</li>
                <li>Ignoring query execution plans</li>
                <li>Over-normalized schemas</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">API Design Best Practices</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">RESTful Design</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Follow REST principles for consistent, predictable APIs:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">HTTP Methods</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>GET - Retrieve data</li>
                  <li>POST - Create resources</li>
                  <li>PUT - Update/replace</li>
                  <li>PATCH - Partial update</li>
                  <li>DELETE - Remove resources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Status Codes</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>200 - OK</li>
                  <li>201 - Created</li>
                  <li>400 - Bad Request</li>
                  <li>401 - Unauthorized</li>
                  <li>500 - Server Error</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Input Validation & Security</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-yellow-900 mb-3">🔐 Security Checklist:</h4>
            <ul className="text-yellow-800 space-y-2">
              <li>Validate all input data with schemas</li>
              <li>Sanitize user inputs to prevent injection attacks</li>
              <li>Implement rate limiting and request throttling</li>
              <li>Use HTTPS for all API endpoints</li>
              <li>Implement proper authentication and authorization</li>
              <li>Log security events and monitor for anomalies</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Performance Optimization</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Caching Strategies</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement multi-level caching for optimal performance:
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">Caching Layers:</h4>
            <ol className="text-blue-800 space-y-2">
              <li><strong>Application Cache:</strong> In-memory caching (Redis, Memcached)</li>
              <li><strong>Database Cache:</strong> Query result caching</li>
              <li><strong>HTTP Cache:</strong> Response caching with proper headers</li>
              <li><strong>CDN Cache:</strong> Static asset caching at edge locations</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Asynchronous Processing</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use background jobs for time-consuming operations:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Example: Email sending with queue
const emailQueue = new Queue('email', {
  redis: { host: 'localhost', port: 6379 }
});

// Add job to queue (non-blocking)
await emailQueue.add('send-welcome', {
  email: user.email,
  name: user.name
});

// Process jobs asynchronously
emailQueue.process('send-welcome', async (job) => {
  const { email, name } = job.data;
  await emailService.sendWelcomeEmail(email, name);
});`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Error Handling & Monitoring</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Structured Error Handling</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement consistent error handling across your application:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`class AppError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

// Global error handler
app.use((error, req, res, next) => {
  const { statusCode = 500, message } = error;
  
  logger.error({
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method
  });
  
  res.status(statusCode).json({
    error: {
      message: process.env.NODE_ENV === 'production' 
        ? 'Something went wrong' 
        : message
    }
  });
});`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Monitoring & Observability</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement comprehensive monitoring:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Logging:</strong> Structured logging with correlation IDs</li>
            <li><strong>Metrics:</strong> Response times, error rates, throughput</li>
            <li><strong>Tracing:</strong> Distributed tracing for complex flows</li>
            <li><strong>Health Checks:</strong> Endpoint health monitoring</li>
            <li><strong>Alerts:</strong> Proactive monitoring with alerting</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Testing Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Unit Tests</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Test individual functions</li>
                <li>Mock dependencies</li>
                <li>Fast execution</li>
                <li>High coverage</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Integration Tests</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>Test component interactions</li>
                <li>Database integration</li>
                <li>API endpoint testing</li>
                <li>Real dependencies</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">E2E Tests</h4>
              <ul className="text-purple-800 text-sm space-y-2">
                <li>Full user workflows</li>
                <li>Production-like environment</li>
                <li>Critical path coverage</li>
                <li>Slower but comprehensive</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Deployment & DevOps</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">CI/CD Pipeline</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement automated deployment pipelines:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Pipeline Stages:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Code commit triggers pipeline</li>
              <li>Run unit and integration tests</li>
              <li>Build and package application</li>
              <li>Deploy to staging environment</li>
              <li>Run E2E tests</li>
              <li>Deploy to production (with rollback capability)</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Container Orchestration</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use containers for consistent deployments:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`# Dockerfile best practices
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]

# Multi-stage builds for smaller images
FROM node:18-alpine as builder
# ... build steps
FROM node:18-alpine as production
COPY --from=builder /app/dist ./dist`}</pre>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "Scalable backend development is about making informed trade-offs between performance, maintainability, and complexity. 
              Start simple, measure everything, and scale incrementally based on real usage patterns."
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
              <p className="text-gray-600 text-sm">Full-stack developer passionate about scalable architecture and backend best practices.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link to="/blogs/blog5" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            ← Previous Article
          </Link>
          <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            All Blogs →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blog6; 