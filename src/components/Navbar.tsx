function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
  
          <h1 className="text-2xl font-bold text-white">
            Rachana Wasnik
          </h1>
  
          <ul className="hidden md:flex gap-8 text-gray-300">
  
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition duration-300"
              >
                About
              </a>
            </li>
  
            <li>
              <a
                href="#services"
                className="hover:text-purple-400 transition duration-300"
              >
                Services
              </a>
            </li>
  
            <li>
              <a
                href="#skills"
                className="hover:text-purple-400 transition duration-300"
              >
                Skills
              </a>
            </li>
  
            <li>
              <a
                href="#projects"
                className="hover:text-purple-400 transition duration-300"
              >
                Projects
              </a>
            </li>
  
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 transition duration-300"
              >
                Contact
              </a>
            </li>
  
          </ul>
  
        </div>
      </nav>
    );
  }
  
  export default Navbar;