function Footer() {
    return (
      <footer className="border-t border-white/10 py-10 mt-20">
  
        <div className="max-w-7xl mx-auto px-8">
  
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  
            <div>
              <h3 className="text-xl font-bold text-white">
                Rachana Wasnik
              </h3>
  
              <p className="text-gray-400">
                Full Stack Developer
              </p>
            </div>
  
            <div className="flex gap-6">
  
              <a
                href="https://github.com/rachanawasnik4-creator"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-purple-400"
              >
                GitHub
              </a>
  
              <a
                href="https://www.linkedin.com/in/rachana-wasnik-8aa5a81a7/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-purple-400"
              >
                LinkedIn
              </a>
  
            </div>
  
          </div>
  
          <div className="mt-8 text-center text-gray-500">
            © 2026 Rachana Wasnik. All Rights Reserved.
          </div>
  
        </div>
  
      </footer>
    );
  }
  
  export default Footer;