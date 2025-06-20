import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t('contact.getInTouch')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('contact.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {t('contact.phone')}
                    </h3>
                    <p className="text-gray-600">17787999778</p>
                    <p className="text-sm text-gray-500">工作日 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {t('contact.location')}
                    </h3>
                    <p className="text-gray-600">{t('contact.locationText')}</p>
                    <p className="text-sm text-gray-500">延续茶庄</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">营业时间</h3>
                    <p className="text-gray-600">周一至周日 8:00-20:00</p>
                    <p className="text-sm text-gray-500">节假日正常营业</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">微信咨询</h3>
                    <p className="text-gray-600">扫码添加微信</p>
                    <p className="text-sm text-gray-500">获取更多产品信息</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">发送消息</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="请输入您的联系电话"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    感兴趣的产品
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">请选择您感兴趣的产品</option>
                    <option value="ancient-tree">古树普洱</option>
                    <option value="white-tea">精品白茶</option>
                    <option value="flower-tea">芬芳花茶</option>
                    <option value="tourism">旅游体验</option>
                    <option value="custom">定制服务</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    留言内容
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="请输入您想了解的内容或需求"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">找到我们</h2>
            <p className="text-lg text-gray-600">
              欢迎您亲自到访我们的茶庄，体验地道的普洱茶文化
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin size={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">地图位置</h3>
              <p>云南省普洱市延续茶庄</p>
              <p className="text-sm mt-2">可在此处嵌入百度地图或高德地图</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              导航搜索：延续茶庄 或 云南省普洱市
            </p>
            <div className="inline-flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                打开百度地图
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                打开高德地图
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 