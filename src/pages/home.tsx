export default function Landing() {
    return (
      <div className="min-h-screen bg-white flex flex-col">
  
        {/* NAVBAR */}
        <nav className="w-full p-6 flex justify-between items-center shadow-sm">
          <div className="text-2xl font-bold text-blue-700">HealthCare Portal</div>
  
          <div className="flex gap-4">
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </nav>
  
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-20 bg-gray-50 flex-grow">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 leading-tight">
              Wellness, Preventive Care &  
              <span className="text-blue-600"> Smarter Health</span>
            </h1>
  
            <p className="text-gray-600 mt-4 text-lg">
              Track your health goals, stay compliant with preventive checkups, and
              access a personalized wellness dashboard — all in one secure portal.
            </p>
  
            <div className="flex gap-4 mt-6">
              <a
                href="/register"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Create Free Account
              </a>
              <a
                href="#features"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
  
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/health-checkup-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--body-medical-aid-pack-in-healthcare-set-illustrations-5588414.png"
            alt="Healthcare Illustration"
            className="w-full max-w-md mt-10 lg:mt-0"
          />
        </section>
  
        {/* FEATURES SECTION */}
        <section id="features" className="px-8 lg:px-20 py-20 bg-white">
          <h2 className="text-3xl font-semibold text-center text-blue-800">
            Why Choose Our Portal?
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
            Designed for simplicity, accuracy, and preventive healthcare excellence.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
  
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">💙</div>
              <h3 className="text-xl font-semibold mb-2">Personalized Dashboard</h3>
              <p className="text-gray-600">
                Track your wellness, daily activity, sleep, hydration, and upcoming checkups — all in one place.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Preventive Checkup Tracking</h3>
              <p className="text-gray-600">
                Stay updated with reminders for annual checkups, blood tests, dental visits, and more.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                HIPAA-inspired privacy controls protect your health information with industry-grade security.
              </p>
            </div>
  
          </div>
        </section>
  
        {/* CTA SECTION */}
        <section className="px-8 lg:px-20 py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-semibold">
            Start Your Wellness Journey Today
          </h2>
          <p className="mt-2 mb-6 text-lg text-blue-100">
            Join thousands taking control of their preventive health.
          </p>
  
          <a
            href="/register"
            className="px-8 py-3 bg-white text-blue-700 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Create Account
          </a>
        </section>
  
        {/* FOOTER */}
        <footer className="text-center py-6 bg-gray-100 text-gray-600 text-sm">
          © {new Date().getFullYear()} HealthCare Portal. All rights reserved.
        </footer>
      </div>
    );
  }
  