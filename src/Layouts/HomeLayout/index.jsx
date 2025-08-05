import { Link, Outlet } from "react-router";

const navOption = [
  { option: "Home", to: "/" },
  { option: "Posts", to: "/post" },
  { option: "Cars", to: "/cars" },
  { option: "Todos", to: "/todo" },
];

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-800">
                Layout<span className="text-indigo-600">Pro</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navOption.map((opt, index) => (
              <Link
                key={index}
                to={opt.to}
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-300 font-medium"
              >
                {opt.option}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:-translate-y-0.5">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Layout<span className="text-indigo-500">Pro</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building innovative solutions for the modern web. We specialize
                in creating beautiful, responsive websites and applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center transition duration-300 group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform"></i>
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to receive updates and news.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center group"
                >
                  <span>Subscribe</span>
                  <i className="fas fa-paper-plane ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-10"></div>

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LayoutPro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
