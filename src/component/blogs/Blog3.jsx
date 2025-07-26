import React from 'react';
import { Link } from 'react-router-dom';

const Blog3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/blogs" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
              ← Back to Blogs
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
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
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              Authentication
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              OAuth2
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              SAML
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Implementing SSO with OAuth2 and SAML
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            A practical walkthrough on integrating Single Sign-On in your app using providers like Google and Okta.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <span>January 5, 2024</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>By Ravi Vats</span>
          </div>
          
          <img 
            src="/images/ssoblog.png" 
            alt="Single Sign-On Implementation" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What is Single Sign-On (SSO)?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Single Sign-On (SSO) is an authentication method that allows users to access multiple applications with one set of credentials. 
            Instead of remembering separate usernames and passwords for each service, users authenticate once and gain access to all 
            connected applications. This improves both user experience and security posture.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Benefits of SSO Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">👤 User Benefits</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>Single set of credentials to remember</li>
                <li>Faster access to applications</li>
                <li>Reduced password fatigue</li>
                <li>Seamless experience across platforms</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">🏢 Business Benefits</h4>
              <ul className="text-green-800 text-sm space-y-2">
                <li>Reduced help desk tickets</li>
                <li>Improved security posture</li>
                <li>Centralized user management</li>
                <li>Better compliance and auditing</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">OAuth2 vs SAML: Choosing Your Protocol</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">OAuth2 + OpenID Connect</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            OAuth2 with OpenID Connect is the modern standard for web and mobile applications. It's lightweight, JSON-based, 
            and designed for internet-scale applications.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Best for:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Web and mobile applications</li>
              <li>API-based architectures</li>
              <li>Consumer-facing applications</li>
              <li>Modern SaaS platforms</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-3">Popular Providers:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Google, Microsoft, GitHub</li>
              <li>Auth0, Okta, AWS Cognito</li>
              <li>Firebase Authentication</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">SAML 2.0</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            SAML (Security Assertion Markup Language) is an XML-based standard, mature and widely adopted in enterprise environments. 
            It excels in complex enterprise scenarios with detailed attribute exchange requirements.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Best for:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Enterprise applications</li>
              <li>Legacy system integration</li>
              <li>Complex attribute exchange</li>
              <li>High-security environments</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-3">Popular Providers:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Active Directory Federation Services</li>
              <li>Okta, Ping Identity</li>
              <li>Shibboleth, SimpleSAMLphp</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementing OAuth2 with Google</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step 1: Google Cloud Console Setup</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            First, create a project in Google Cloud Console and configure OAuth2 credentials:
          </p>
          
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li>Go to Google Cloud Console and create a new project</li>
            <li>Enable the Google+ API or Google Identity services</li>
            <li>Create OAuth2 credentials (Client ID and Secret)</li>
            <li>Configure authorized redirect URIs</li>
            <li>Set up consent screen with required scopes</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step 2: Frontend Integration</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use Google's JavaScript SDK or build custom OAuth2 flows. Here's the general approach:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Initialize Google OAuth2
const initGoogleAuth = () => {
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: 'YOUR_GOOGLE_CLIENT_ID'
    });
  });
};

// Handle sign-in
const handleGoogleSignIn = async () => {
  const authInstance = gapi.auth2.getAuthInstance();
  const user = await authInstance.signIn();
  const token = user.getAuthResponse().id_token;
  
  // Send token to your backend
  await fetch('/api/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });
};`}</pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step 3: Backend Verification</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Always verify tokens on your backend to ensure security:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Node.js/Express example
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

app.post('/api/auth/google', async (req, res) => {
  try {
    const { token } = req.body;
    
    // Verify the token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;
    
    // Create or update user in your database
    const user = await createOrUpdateUser({
      googleId: sub,
      email,
      name,
      picture
    });
    
    // Generate your app's JWT token
    const appToken = generateJWT(user);
    res.json({ token: appToken, user });
    
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementing SAML with Okta</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step 1: Okta Configuration</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Set up your application in Okta's admin console:
          </p>
          
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li>Create a new SAML 2.0 application in Okta</li>
            <li>Configure Single Sign-On URL (ACS URL)</li>
            <li>Set Audience URI (Entity ID)</li>
            <li>Configure attribute statements for user data</li>
            <li>Download IdP metadata or note the metadata URL</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step 2: SAML Library Integration</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use a SAML library appropriate for your backend technology. Here's a Node.js example:
          </p>
          
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 text-sm">
            <pre>{`// Using passport-saml
const SamlStrategy = require('passport-saml').Strategy;

passport.use(new SamlStrategy({
  callbackUrl: 'https://yourapp.com/saml/consume',
  entryPoint: 'https://dev-123.okta.com/app/dev-123_yourapp_1/exk.../sso/saml',
  issuer: 'https://yourapp.com',
  cert: fs.readFileSync('okta-cert.pem', 'utf8')
}, (profile, done) => {
  // Process user profile from SAML response
  const user = {
    id: profile.nameID,
    email: profile['urn:oid:0.9.2342.19200300.100.1.3'],
    name: profile['urn:oid:2.5.4.42'] + ' ' + profile['urn:oid:2.5.4.4']
  };
  
  return done(null, user);
}));`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Security Best Practices</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-red-900 mb-3">🔒 Critical Security Measures:</h4>
            <ul className="text-red-800 space-y-2">
              <li><strong>Always verify tokens/assertions on the backend</strong> - Never trust client-side validation alone</li>
              <li><strong>Use HTTPS everywhere</strong> - SSO flows must be encrypted in transit</li>
              <li><strong>Validate redirect URIs</strong> - Prevent authorization code interception attacks</li>
              <li><strong>Implement CSRF protection</strong> - Use state parameters in OAuth2 flows</li>
              <li><strong>Set appropriate token expiration</strong> - Balance security with user experience</li>
              <li><strong>Log authentication events</strong> - Monitor for suspicious activity</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Pitfalls and Solutions</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Token Storage</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Problem:</strong> Storing tokens insecurely in localStorage or sessionStorage.<br/>
            <strong>Solution:</strong> Use httpOnly cookies for web apps, secure storage for mobile apps.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Insufficient Validation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Problem:</strong> Not properly validating tokens or SAML assertions.<br/>
            <strong>Solution:</strong> Always verify signatures, expiration, audience, and issuer claims.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Poor Error Handling</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Problem:</strong> Exposing sensitive error information to users.<br/>
            <strong>Solution:</strong> Log detailed errors server-side, show generic messages to users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Testing Your SSO Implementation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Thorough testing is crucial for SSO implementations. Test scenarios should include:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Successful authentication flows</li>
            <li>Failed authentication handling</li>
            <li>Token expiration and refresh</li>
            <li>Logout and session termination</li>
            <li>Error conditions and edge cases</li>
            <li>Cross-browser and mobile compatibility</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "SSO implementation is not just about technical integration—it's about creating a seamless, secure experience 
              that builds user trust while maintaining the highest security standards."
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
              <p className="text-gray-600 text-sm">Full-stack developer specializing in authentication systems and security.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/blogs/blog2" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            ← Previous Article
          </Link>
          <Link 
            to="/blogs/blog4" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            Next Article →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blog3; 