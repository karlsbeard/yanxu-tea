import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      // 导航
      nav: {
        home: '首页',
        teas: '茶叶系列',
        contact: '联系我们',
        tourism: '旅游体验',
        language: '语言'
      },
      // 首页
      home: {
        title: '延续',
        subtitle: '传承千年茶道，延续古树精神',
        welcome: '欢迎来到延续茶庄',
        description: '延续茶庄坐落于美丽的普洱，传承着千年的制茶工艺。我们专注于古树普洱、精品白茶、芬芳花茶等优质茶叶的种植与制作。',
        exploreMore: '了解更多',
        ourStory: '我们的故事',
        storyDescription: '延续茶庄始于对茶文化的深深热爱，我们致力于将最纯正的普洱茶味道传递给世界各地的茶友。'
      },
      // 茶叶系列
      teas: {
        title: '茶叶系列',
        subtitle: '精选优质茶叶，传承古法工艺',
        ancientTree: {
          title: '古树普洱',
          description: '采用百年以上古茶树叶片，经传统工艺精制而成，口感醇厚，回甘悠长。'
        },
        whiteTea: {
          title: '精品白茶',
          description: '选用高山嫩芽，自然萎凋，工艺简约，保持茶叶最本真的味道。'
        },
        flowerTea: {
          title: '芬芳花茶',
          description: '精选时令花朵与优质茶叶完美融合，香气怡人，口感清雅。'
        }
      },
      // 联系我们
      contact: {
        title: '联系我们',
        subtitle: '我们期待与您的交流',
        phone: '电话',
        location: '地址',
        locationText: '云南省普洱市',
        getInTouch: '联系方式',
        description: '如果您对我们的茶叶产品或服务有任何疑问，欢迎随时联系我们。我们的团队将竭诚为您服务。'
      },
      // 旅游体验
      tourism: {
        title: '旅游体验',
        subtitle: '体验普洱茶文化之旅',
        description: '我们为远道而来的朋友提供专业的旅游接待服务，带您深度体验普洱茶文化。',
        services: '服务内容',
        teaGarden: '茶园参观',
        teaGardenDesc: '亲身走进古茶园，了解茶叶的生长环境和采摘工艺',
        teaCeremony: '茶艺体验',
        teaCeremonyDesc: '学习传统茶艺，感受茶文化的深厚底蕴',
        localCulture: '当地文化',
        localCultureDesc: '探索普洱地区的历史文化和民族风情',
        contactUs: '联系我们预约体验'
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        teas: 'Tea Collection',
        contact: 'Contact',
        tourism: 'Tea Tourism',
        language: 'Language'
      },
      // Home
      home: {
        title: 'YanXu Tea',
        subtitle: 'Inheriting Millennium Tea Culture, Continuing Ancient Tree Spirit',
        welcome: 'Welcome to YanXu Tea House',
        description: 'YanXu Tea House is located in the beautiful Pu\'er region, inheriting thousand-year-old tea-making craftsmanship. We focus on cultivating and producing high-quality teas including ancient tree Pu\'er, premium white tea, and fragrant flower tea.',
        exploreMore: 'Learn More',
        ourStory: 'Our Story',
        storyDescription: 'YanXu Tea House begins with a deep love for tea culture. We are committed to delivering the purest taste of Pu\'er tea to tea lovers around the world.'
      },
      // Teas
      teas: {
        title: 'Tea Collection',
        subtitle: 'Premium Selected Teas, Traditional Craftsmanship',
        ancientTree: {
          title: 'Ancient Tree Pu\'er',
          description: 'Made from leaves of century-old tea trees, processed with traditional techniques for a rich taste and lasting sweet aftertaste.'
        },
        whiteTea: {
          title: 'Premium White Tea',
          description: 'Selected from high mountain tender buds, naturally withered with simple processing to maintain the most authentic tea flavor.'
        },
        flowerTea: {
          title: 'Fragrant Flower Tea',
          description: 'Perfect blend of seasonal flowers with premium tea leaves, offering pleasant aroma and elegant taste.'
        }
      },
      // Contact
      contact: {
        title: 'Contact Us',
        subtitle: 'We Look Forward to Hearing from You',
        phone: 'Phone',
        location: 'Location',
        locationText: 'Pu\'er City, Yunnan Province, China',
        getInTouch: 'Get in Touch',
        description: 'If you have any questions about our tea products or services, please feel free to contact us. Our team is dedicated to serving you.'
      },
      // Tourism
      tourism: {
        title: 'Tea Tourism',
        subtitle: 'Experience Pu\'er Tea Culture Journey',
        description: 'We provide professional tourism services for visitors, offering deep experiences of Pu\'er tea culture.',
        services: 'Our Services',
        teaGarden: 'Tea Garden Visit',
        teaGardenDesc: 'Walk through ancient tea gardens and learn about tea growing environment and harvesting techniques',
        teaCeremony: 'Tea Ceremony Experience',
        teaCeremonyDesc: 'Learn traditional tea ceremony and feel the profound heritage of tea culture',
        localCulture: 'Local Culture',
        localCultureDesc: 'Explore the history, culture and ethnic customs of Pu\'er region',
        contactUs: 'Contact us to book your experience'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 