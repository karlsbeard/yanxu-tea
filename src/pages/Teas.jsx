import { useTranslation } from 'react-i18next';
import { Leaf, Star, Coffee } from 'lucide-react';

const Teas = () => {
  const { t } = useTranslation();

  const teaProducts = [
    {
      id: 1,
      key: 'ancientTree',
      icon: '🌿',
      image: 'ancient-tree-puer',
      features: ['百年古树', '传统工艺', '回甘悠长', '茶汤醇厚']
    },
    {
      id: 2,
      key: 'whiteTea',
      icon: '🍃',
      image: 'white-tea',
      features: ['高山嫩芽', '自然萎凋', '清香淡雅', '口感清甜']
    },
    {
      id: 3,
      key: 'flowerTea',
      icon: '🌸',
      image: 'flower-tea',
      features: ['时令花朵', '香气怡人', '口感清雅', '美容养颜']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('teas.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('teas.subtitle')}
          </p>
        </div>
      </section>

      {/* Tea Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {teaProducts.map((tea) => (
              <div key={tea.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Product Image */}
                <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl">{tea.icon}</span>
                    <p className="mt-4 text-gray-600">产品图片位置</p>
                    <p className="text-sm text-gray-500">{tea.image}</p>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {t(`teas.${tea.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`teas.${tea.key}.description`)}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {tea.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star size={16} className="text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                    了解详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tea Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              茶文化传承
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              每一片茶叶都承载着深厚的文化底蕴，从古树茶园到您的茶杯，我们用心守护每一个环节
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">精选原料</h3>
              <p className="text-gray-600">
                严选普洱地区优质茶园，确保每一片茶叶的品质与纯正
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">传统工艺</h3>
              <p className="text-gray-600">
                传承千年制茶工艺，结合现代科学方法，保持茶叶最佳品质
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">匠心制作</h3>
              <p className="text-gray-600">
                每一道工序都经过严格把控，确保茶叶的香气、口感达到最佳状态
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">想要了解更多？</h2>
          <p className="text-lg mb-8">
            联系我们获取详细的产品信息和品鉴建议
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            立即联系
          </button>
        </div>
      </section>
    </div>
  );
};

export default Teas; 