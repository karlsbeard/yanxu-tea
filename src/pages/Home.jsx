import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>
            <Link
              to="/teas"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              {t('home.exploreMore')}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C80,96 240,96 360,64 C480,32 640,32 720,64 C800,96 960,96 1080,64 C1200,32 1360,32 1440,64 V120 H0 V64 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {t('home.welcome')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('home.description')}
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">传统工艺</h3>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">品质保证</h3>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">用心服务</h3>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Leaf size={64} className="mx-auto mb-4" />
                <p>品牌Logo位置</p>
                <p className="text-sm">请上传您的茶庄图片</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('home.ourStory')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.storyDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 h-48 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-4xl">🌿</span>
                  <p className="mt-2">古树茶园</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">古树普洱</h3>
              <p className="text-gray-600">百年古树，传承品质</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 h-48 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-4xl">🍃</span>
                  <p className="mt-2">精品白茶</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">精品白茶</h3>
              <p className="text-gray-600">高山嫩芽，清香淡雅</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 h-48 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-4xl">🌸</span>
                  <p className="mt-2">芬芳花茶</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">芬芳花茶</h3>
              <p className="text-gray-600">花香茶韵，口感怡人</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            体验普洱茶文化之旅
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            来普洱，感受千年茶道的魅力，体验最地道的茶文化
          </p>
          <div className="space-x-4">
            <Link
              to="/tourism"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              了解旅游体验
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 