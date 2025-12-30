import blackFullLogo from '@/assets/black_full_name_logo.svg';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={blackFullLogo} alt="Kleva" className="h-8" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Compliance-first AI for collections and loss mitigation
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-gray-900">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2025 Kleva. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#compliance" className="text-gray-600 hover:text-gray-900 transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
