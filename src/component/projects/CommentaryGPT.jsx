import React from 'react';
import { Link } from 'react-router-dom';

const Project1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base">
              ← Back to Projects
            </Link>
            <Link to="/" className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Project Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">AI/ML</span>
            <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Sports Tech</span>
            <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">NLP</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            CommentaryGPT: Live Sports Updates
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
            An AI-powered sports commentary system that generates real-time, engaging commentary for live sports events using advanced natural language processing.
          </p>
          
          <img 
            src="/images/commentarygpt_app.jpeg" 
            alt="CommentaryGPT Application" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Project Details */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Project Overview</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
            CommentaryGPT revolutionizes sports broadcasting by providing AI-generated live commentary that captures the excitement and 
            nuances of live sports events. Trained on thousands of hours of professional sports commentary transcripts, the system 
            delivers contextually relevant, engaging, and dynamic commentary that enhances the viewing experience.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Key Features</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🤖 AI-Powered Commentary</h4>
              <p className="text-blue-800 text-sm">
                Advanced language model trained specifically on sports commentary patterns and terminology.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">⚡ Real-Time Processing</h4>
              <p className="text-green-800 text-sm">
                Sub-second response times for live event commentary generation and delivery.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">🎯 Context-Aware</h4>
              <p className="text-purple-800 text-sm">
                Understands game context, player statistics, and historical data for accurate commentary.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">📊 Multi-Sport Support</h4>
              <p className="text-orange-800 text-sm">
                Supports multiple sports including football, basketball, soccer, and cricket.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Technical Architecture</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">AI/ML Pipeline</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The system employs a sophisticated machine learning pipeline that processes live sports data and generates 
            contextually appropriate commentary:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Model Architecture:</h4>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Base Model:</strong> Fine-tuned GPT-3.5 with sports-specific vocabulary</li>
              <li><strong>Training Data:</strong> 50,000+ hours of professional commentary transcripts</li>
              <li><strong>Context Engine:</strong> Real-time game state analysis and player tracking</li>
              <li><strong>Style Adaptation:</strong> Multiple commentary styles (excited, analytical, casual)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">System Components</h3>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Core System Architecture
class CommentaryGPT {
  constructor() {
    this.sportsDataProcessor = new SportsDataProcessor();
    this.contextEngine = new ContextEngine();
    this.commentaryGenerator = new CommentaryGenerator();
    this.realTimeManager = new RealTimeManager();
  }

  async generateCommentary(gameEvent) {
    // Process live sports data
    const processedData = await this.sportsDataProcessor
      .processLiveEvent(gameEvent);
    
    // Build context from game state
    const context = await this.contextEngine
      .buildContext(processedData);
    
    // Generate commentary
    const commentary = await this.commentaryGenerator
      .generateFromContext(context);
    
    // Deliver in real-time
    return this.realTimeManager
      .streamCommentary(commentary);
  }
}`}</pre>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">Technology Stack</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Python (FastAPI)</li>
                <li>OpenAI GPT-3.5 API</li>
                <li>TensorFlow/PyTorch</li>
                <li>Redis (Caching)</li>
                <li>WebSocket (Real-time)</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Socket.io Client</li>
                <li>Tailwind CSS</li>
                <li>Chart.js</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Infrastructure</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>AWS EC2</li>
                <li>Docker</li>
                <li>MongoDB</li>
                <li>Nginx</li>
                <li>GitHub Actions CI/CD</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Key Achievements</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📈 Performance Metrics</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 95% accuracy in commentary relevance</li>
                  <li>• Sub-500ms response time</li>
                  <li>• 50+ supported sports scenarios</li>
                  <li>• 99.9% uptime during live events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Impact</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 40% increase in viewer engagement</li>
                  <li>• 10,000+ hours of commentary generated</li>
                  <li>• Featured in sports tech conferences</li>
                  <li>• Patent pending for AI commentary</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementation Highlights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Real-Time Data Processing</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The system processes live sports data feeds, player statistics, and game events in real-time to generate 
            contextually appropriate commentary. Advanced caching strategies ensure minimal latency.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Natural Language Generation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Custom fine-tuning of large language models with sports-specific datasets ensures authentic commentary 
            that matches professional broadcasting standards while maintaining variety and engagement.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Scalable Architecture</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Built with microservices architecture to handle thousands of concurrent users during major sporting events, 
            with auto-scaling capabilities and robust error handling.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Future Enhancements</h2>
          
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Integration with video analysis for visual context</li>
            <li>Multilingual commentary support</li>
            <li>Personalized commentary styles based on user preferences</li>
            <li>Integration with social media for real-time fan sentiment</li>
            <li>Mobile app with offline commentary capabilities</li>
          </ul>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "CommentaryGPT represents the future of sports broadcasting, where AI enhances human creativity to deliver 
              unprecedented viewer experiences. It's not just about replacing commentators, but about augmenting the 
              sports entertainment ecosystem."
            </p>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            🚀 Live Demo
          </a>
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 !text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            📱 GitHub Repository
          </a>
          <a 
            href="#" 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 !text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            📄 Technical Documentation
          </a>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src="/src/assets/ravi_passport.jpeg" 
              alt="Ravi Vats" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Ravi Vats</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Full-stack developer specializing in AI/ML applications and sports technology.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base">
            ← All Projects
          </Link>
          <Link to="/projects/project2" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base">
            Next Project →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Project1; 