export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white">K</span>
          </div>
          <span className="text-xl">Kleva</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">
            Product
          </a>
          <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
            Solutions
          </a>
          <a href="#compliance" className="text-gray-600 hover:text-gray-900 transition-colors">
            Compliance
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>

        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
          Book a demo
        </button>
      </div>
    </nav>
  );
}
