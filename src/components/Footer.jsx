import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">延</span>
              </div>
              <span className="font-bold text-xl">{t('home.title')}</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              传承千年茶道，延续古树精神。我们致力于将最纯正的普洱茶味道传递给世界各地的茶友。
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200 cursor-pointer">
                <span className="text-xs">微</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200 cursor-pointer">
                <span className="text-xs">抖</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/teas" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('nav.teas')}
                </Link>
              </li>
              <li>
                <Link to="/tourism" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('nav.tourism')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">茶叶系列</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  古树普洱
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  精品白茶
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  芬芳花茶
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  定制茶叶
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-500" />
                <span className="text-gray-400">17787999778</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-500" />
                <span className="text-gray-400">云南省普洱市</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-500" />
                <span className="text-gray-400">微信咨询</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 延续茶庄. 保留所有权利.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                服务条款
              </a>
              <div className="flex items-center space-x-1">
                <Leaf size={14} className="text-green-500" />
                <span>茶叶品质保证</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 