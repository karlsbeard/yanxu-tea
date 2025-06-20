import { useTranslation } from 'react-i18next';
import { Camera, Users, Clock, Star, MapPin, Coffee } from 'lucide-react';

const Tourism = () => {
  const { t } = useTranslation();

  const tourServices = [
    {
      icon: Coffee,
      title: t('tourism.teaGarden'),
      description: t('tourism.teaGardenDesc'),
      duration: '2-3小时',
      image: 'tea-garden-tour'
    },
    {
      icon: Star,
      title: t('tourism.teaCeremony'),
      description: t('tourism.teaCeremonyDesc'),
      duration: '1-2小时',
      image: 'tea-ceremony'
    },
    {
      icon: MapPin,
      title: t('tourism.localCulture'),
      description: t('tourism.localCultureDesc'),
      duration: '半天',
      image: 'local-culture'
    }
  ];

  const tourPackages = [
    {
      title: '半日茶园体验',
      duration: '4小时',
      price: '¥268/人',
      includes: ['茶园参观', '茶艺体验', '品茶', '茶叶礼品'],
      highlight: '适合初次体验者'
    },
    {
      title: '全日茶文化之旅',
      duration: '8小时',
      price: '¥488/人',
      includes: ['茶园深度游', '制茶体验', '茶艺学习', '当地美食', '茶叶大礼包'],
      highlight: '最受欢迎'
    },
    {
      title: '两日茶庄住宿体验',
      duration: '2天1夜',
      price: '¥888/人',
      includes: ['茶庄住宿', '全程茶文化体验', '当地民俗活动', '专业茶师指导', '定制茶叶'],
      highlight: '深度体验'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('tourism.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t('tourism.subtitle')}
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            {t('tourism.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('tourism.services')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tourServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Service Image */}
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <IconComponent size={48} className="text-green-600 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">{service.image}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>建议时间：{service.duration}</span>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                    了解详情
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              旅游套餐
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我们为不同需求的游客精心设计了多种旅游套餐，让您深度体验普洱茶文化
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${index === 1 ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                {index === 1 && (
                  <div className="bg-green-500 text-white text-center py-2 font-semibold">
                    {pkg.highlight}
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  
                  <div className="text-3xl font-bold text-green-600 mb-6">{pkg.price}</div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <Star size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {index !== 1 && (
                    <div className="text-center text-sm text-gray-500 mb-4">
                      {pkg.highlight}
                    </div>
                  )}
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                    立即预订
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              精彩瞬间
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              来看看其他游客的精彩体验
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-gray-200 h-48 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
                <div className="text-center text-gray-500">
                  <Camera size={32} className="mx-auto mb-2" />
                  <p className="text-sm">游客照片 {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('tourism.contactUs')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            联系我们预订您的普洱茶文化之旅，我们将为您量身定制最适合的体验方案
          </p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              电话预订：17787999778
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
              微信咨询
            </button>
          </div>
          
          <div className="mt-8 text-sm">
            <p>预订需提前2-3天，我们会根据天气和茶园情况为您安排最佳的体验时间</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism; 