import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'teas', path: '/teas' },
    { key: 'tourism', path: '/tourism' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">延</span>
              </div>
              <span className="font-bold text-xl text-gray-800">
                {t('home.title')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <Globe size={16} />
                <span>{i18n.language === 'zh' ? 'EN' : '中'}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 