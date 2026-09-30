/* ============================================
   吨袋网站 - 数据文件
   ============================================ */

const SITE_DATA = {
  // 公司信息
  company: {
    nameZh: 'XX吨袋有限公司',
    nameEn: 'XX FIBC Co., Ltd.',
    sloganZh: '专业吨袋制造商 · 20年专注集装袋定制',
    sloganEn: 'Professional FIBC Manufacturer · 20 Years of Expertise',
    address: 'XX省XX市XX工业园区XX路88号',
    phone: '+86-138-0000-0000',
    servicePhone: '+86-138-0000-0001',
    email: 'sales@xxfibc.com',
    complaintEmail: 'complaint@xxfibc.com',
    fax: '+86-0571-88888888',
    whatsapp: '+86-138-0000-0000',
    wechat: 'XX吨袋官方',
    founded: 2005,
    factoryArea: '20000㎡',
    employees: '150人',
    capacity: '200万条/年',
    countries: '50+'
  },

  // 产品列表
  products: [
    {
      id: 'std-1000',
      category: 'standard',
      badge: '热销',
      nameZh: '标准吨袋',
      nameEn: 'Standard FIBC Bag',
      model: 'XX-STD-1000',
      swl: '1000kg',
      sf: '5:1',
      size: '900×900×1000mm',
      top: '十字顶',
      bottom: '平底',
      fabric: '180 g/㎡',
      liner: '无',
      color: '米黄',
      cert: 'ISO9001',
      descZh: '通用型集装袋，适用于化工原料、矿产颗粒、化肥等大宗物料包装，坚固耐用，性价比高。',
      descEn: 'Universal bulk bag, suitable for chemical raw materials, mineral particles, fertilizers and other bulk materials, sturdy and cost-effective.',
      image: 'images/product-std.svg'
    },
    {
      id: 'food-1000',
      category: 'food',
      badge: 'FDA认证',
      nameZh: '食品级吨袋',
      nameEn: 'Food Grade FIBC Bag',
      model: 'XX-FOOD-1000',
      swl: '1000kg',
      sf: '5:1',
      size: '900×900×1100mm',
      top: '兜底顶',
      bottom: '卸料口',
      fabric: '200 g/㎡',
      liner: 'PE食品级',
      color: '白色',
      cert: 'FDA / HACCP',
      descZh: '食品级原料专用，符合FDA食品接触标准，可定制印刷，适用于食品、奶粉、添加剂等。',
      descEn: 'Food-grade raw materials, FDA food contact certified, customizable printing, suitable for food, milk powder, additives.',
      image: 'images/product-food.svg'
    },
    {
      id: 'un-1000',
      category: 'un',
      badge: 'UN认证',
      nameZh: 'UN危险品吨袋',
      nameEn: 'UN Certified FIBC',
      model: 'XX-UN-1000',
      swl: '1000kg',
      sf: '6:1',
      size: '950×950×1100mm',
      top: '兜底顶',
      bottom: '卸料口',
      fabric: '230 g/㎡',
      liner: '导电内袋',
      color: '白色',
      cert: 'UN危险品包装',
      descZh: '危险化学品专用吨袋，通过UN危险品包装测试，适用于易燃易爆品、化学品运输。',
      descEn: 'Dangerous chemicals dedicated FIBC bag, passed UN dangerous goods packaging test, suitable for flammable, explosive and chemical transport.',
      image: 'images/product-un.svg'
    },
    {
      id: 'cond-1000',
      category: 'conductive',
      badge: '防静电',
      nameZh: '导电吨袋',
      nameEn: 'Conductive FIBC Bag',
      model: 'XX-CON-1000',
      swl: '1000kg',
      sf: '5:1',
      size: '900×900×1000mm',
      top: '十字顶',
      bottom: '平底',
      fabric: '200 g/㎡',
      liner: '导电内袋',
      color: '黑色',
      cert: 'IEC 61340',
      descZh: '防静电专用吨袋，适用于易燃易爆粉体包装，符合IEC 61340防静电标准。',
      descEn: 'Anti-static FIBC bag, suitable for flammable explosive powder packaging, compliant with IEC 61340.',
      image: 'images/product-cond.svg'
    },
    {
      id: 'mine-1500',
      category: 'standard',
      badge: '重型',
      nameZh: '矿用吨袋',
      nameEn: 'Mining FIBC Bag',
      model: 'XX-MINE-1500',
      swl: '1500kg',
      sf: '5:1',
      size: '1000×1000×1200mm',
      top: '兜底顶',
      bottom: '卸料口',
      fabric: '230 g/㎡',
      liner: 'PE内袋',
      color: '蓝色',
      cert: 'ISO9001',
      descZh: '重型矿用集装袋，专门用于矿石、金属粉末、建材颗粒的运输，加固设计承重更强。',
      descEn: 'Heavy-duty mining FIBC bag, specifically for ore, metal powder, building materials transport.',
      image: 'images/product-mine.svg'
    },
    {
      id: 'woven',
      nameZh: 'PP编织袋',
      nameEn: 'PP Woven Bag',
      model: 'XX-WV-50',
      swl: '50kg',
      sf: '3:1',
      size: '600×400（可定制）',
      top: '缝口',
      bottom: '缝口',
      fabric: '80-120 g/㎡',
      liner: '可选',
      color: '白/彩印',
      cert: 'ISO9001',
      category: 'woven',
      badge: '彩印',
      descZh: 'PP塑料编织袋，适用于化肥、粮食、饲料、种子、化工原料等包装，支持彩印定制。',
      descEn: 'PP woven plastic bag, suitable for fertilizer, grain, feed, seeds, chemical raw materials.',
      image: 'images/product-woven.svg'
    }
  ],

  // 应用领域
  applications: [
    { icon: '⚗️', nameZh: '化工行业', nameEn: 'Chemical Industry', descZh: '粉状、膏状、颗粒状化工原料的安全运输包装', descEn: 'Safe transport packaging for chemical raw materials' },
    { icon: '🍚', nameZh: '食品行业', nameEn: 'Food Industry', descZh: '食品级原料、奶粉、添加剂的安全包装，符合FDA标准', descEn: 'Food-grade packaging compliant with FDA' },
    { icon: '💊', nameZh: '医药行业', nameEn: 'Pharmaceutical', descZh: '医药原料、中间体的GMP车间专用包装', descEn: 'GMP workshop packaging for pharmaceutical materials' },
    { icon: '⛏️', nameZh: '矿产行业', nameEn: 'Mining Industry', descZh: '矿石、金属粉末、建材颗粒的重型包装', descEn: 'Heavy-duty packaging for ore, metal powder' },
    { icon: '🌾', nameZh: '农业行业', nameEn: 'Agriculture', descZh: '化肥、粮食、饲料、种子的农用包装', descEn: 'Agricultural packaging for fertilizer, grain, feed' },
    { icon: '🏗️', nameZh: '建材行业', nameEn: 'Construction', descZh: '水泥、添加剂、干粉砂浆的工业包装', descEn: 'Industrial packaging for cement, additives' }
  ],

  // 资质证书
  certificates: [
    { icon: '🏛️', nameZh: '营业执照', nameEn: 'Business License', descZh: '公司经营资质', descEn: 'Business qualification' },
    { icon: '📋', nameZh: 'ISO 9001', nameEn: 'ISO 9001', descZh: '质量管理体系认证', descEn: 'Quality Management System' },
    { icon: '🌿', nameZh: 'ISO 14001', nameEn: 'ISO 14001', descZh: '环境管理体系认证', descEn: 'Environmental Management' },
    { icon: '🍴', nameZh: 'FDA 食品级', nameEn: 'FDA Food Grade', descZh: '食品接触材料认证', descEn: 'Food Contact Material' },
    { icon: '⚠️', nameZh: 'UN 危险品', nameEn: 'UN Dangerous', descZh: '危险品包装认证', descEn: 'Dangerous Goods Packaging' },
    { icon: '✅', nameZh: 'CE 认证', nameEn: 'CE Mark', descZh: '欧盟市场准入', descEn: 'EU Market Access' },
    { icon: '🛡️', nameZh: 'HACCP', nameEn: 'HACCP', descZh: '食品安全管理', descEn: 'Food Safety Management' },
    { icon: '⚡', nameZh: 'IEC 61340', nameEn: 'IEC 61340', descZh: '防静电标准', descEn: 'Anti-static Standard' }
  ],

  // FAQ
  faqs: [
    {
      qZh: '吨袋最大载重是多少？',
      qEn: 'What is the max load of FIBC?',
      aZh: '标准吨袋载重范围500-2000kg，常用1000kg/1500kg，最大可定制2000kg。',
      aEn: 'Standard FIBC load range 500-2000kg, common 1000kg/1500kg, max customizable 2000kg.'
    },
    {
      qZh: '食品级吨袋需要哪些认证？',
      qEn: 'What certifications for food grade FIBC?',
      aZh: '需FDA认证、HACCP食品安全管理，部分国家要求BRC认证。',
      aEn: 'FDA certification, HACCP food safety management, BRC certification required by some countries.'
    },
    {
      qZh: 'UN 危包袋的测试标准？',
      qEn: 'UN dangerous goods packaging test standard?',
      aZh: '通过UN危险品包装测试，包括跌落、堆码、振动、低温等多项测试。',
      aEn: 'Passed UN dangerous goods packaging tests including drop, stacking, vibration, low temperature tests.'
    },
    {
      qZh: '交货周期是多长？',
      qEn: 'What is the delivery time?',
      aZh: '标准款7-15天，定制款15-30天，加急可缩短至7天。',
      aEn: 'Standard 7-15 days, customized 15-30 days, urgent orders 7 days.'
    },
    {
      qZh: '是否支持小批量定制？',
      qEn: 'Do you support small batch customization?',
      aZh: '支持，MOQ最低500条起，定制印刷1000条起。',
      aEn: 'Yes, MOQ from 500pcs, custom printing from 1000pcs.'
    },
    {
      qZh: '产品保修期多久？',
      qEn: 'What is the product warranty?',
      aZh: '出厂后12个月内出现质量问题免费更换。',
      aEn: 'Free replacement within 12 months from delivery for quality issues.'
    },
    {
      qZh: '是否提供样品？',
      qEn: 'Do you provide samples?',
      aZh: '提供免费样品（运费客户承担），定制样品需收取打样费，量产后退还。',
      aEn: 'Free samples (shipping paid by customer), custom samples charge fee refundable after order.'
    },
    {
      qZh: '如何计算运费？',
      qEn: 'How to calculate shipping?',
      aZh: '根据订单数量和目的地，可海运/陆运/空运，提供CIF/FOB/DDP报价。',
      aEn: 'Based on order quantity and destination, sea/land/air shipping, CIF/FOB/DDP quotes.'
    }
  ],

  // 客户评价
  testimonials: [
    {
      textZh: '产品质量稳定，交期准时，已合作5年。',
      textEn: 'Stable quality, on-time delivery, we have cooperated for 5 years.',
      author: 'Mr. Schmidt',
      company: '德国 XX 化工',
      companyEn: 'Germany XX Chemical'
    },
    {
      textZh: 'FDA认证齐全，食品级吨袋完全符合我们的要求。',
      textEn: 'FDA certification complete, food-grade FIBC fully meets our requirements.',
      author: 'Mr. Johnson',
      company: '美国 XX 食品集团',
      companyEn: 'USA XX Food Group'
    },
    {
      textZh: 'UN危包袋顺利通过我们的危险品运输测试。',
      textEn: 'UN dangerous goods FIBC passed our dangerous goods transport test.',
      author: 'Mr. Silva',
      company: '巴西 XX 矿业公司',
      companyEn: 'Brazil XX Mining'
    }
  ],

  // 优势
  advantages: [
    {
      icon: '🏭',
      titleZh: '源头工厂',
      titleEn: 'Source Factory',
      descZh: '自有20000㎡生产基地，引进国际先进生产线',
      descEn: '20000㎡ production base, international advanced production lines'
    },
    {
      icon: '🎨',
      titleZh: '全定制服务',
      titleEn: 'Full Customization',
      descZh: '支持尺寸、印刷、提手、卸料口全定制',
      descEn: 'Customizable size, lifting loops, discharge spout'
    },
    {
      icon: '⏱️',
      titleZh: '快速交付',
      titleEn: 'Fast Delivery',
      descZh: '7天打样，15天交付，24小时报价响应',
      descEn: '7 days sample, 15 days delivery, 24h quote response'
    },
    {
      icon: '🏆',
      titleZh: '资质齐全',
      titleEn: 'Full Certifications',
      descZh: 'FDA/UN/CE/HACCP认证，远销50+国家',
      descEn: 'FDA/UN/CE/HACCP certified, exported to 50+ countries'
    }
  ],

  // 客户 Logo 占位
  logos: [
    'ChemCorp', 'FoodTech', 'MinePro', 'AgriTrade', 'PharmaCo', 'BuildMat',
    'GlobalChem', 'SafeFood', 'HeavyMine', 'FarmWorld', 'MedSupply', 'CementPlus'
  ]
};

// 国际化文案
const I18N = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      products: '产品中心',
      applications: '应用领域',
      manufacturing: '生产实力',
      faq: '常见问题',
      contact: '联系我们'
    },
    banner: {
      tag: '专业吨袋制造商',
      title: '专业吨袋制造商 · 20年专注集装袋定制',
      subtitle: '月产能200万条 | 出口50+国家 | FDA/UN/CE认证齐全',
      cta1: '获取报价',
      cta2: '下载产品手册'
    },
    stats: {
      factory: '工厂面积',
      capacity: '年产能',
      countries: '出口国家',
      experience: '行业经验'
    },
    section: {
      advantages: {
        tag: 'CORE ADVANTAGES',
        title: '为什么选择我们',
        desc: '20年专业经验，源头工厂直接供货，全定制能力'
      },
      products: {
        tag: 'PRODUCTS',
        title: '主打产品系列',
        desc: '全系列吨袋产品，支持尺寸/印刷/提手定制'
      },
      applications: {
        tag: 'APPLICATIONS',
        title: '应用领域',
        desc: '服务全球化工、食品、医药、矿产、农业等行业'
      },
      manufacturing: {
        tag: 'MANUFACTURING',
        title: '生产实力',
        desc: '20000㎡现代化工厂，全流程质量管控'
      },
      clients: {
        tag: 'OUR CLIENTS',
        title: '合作伙伴',
        desc: '产品远销全球50+国家，服务众多行业头部客户'
      },
      testimonials: {
        tag: 'TESTIMONIALS',
        title: '客户反馈',
        desc: '客户的认可是我们前进的动力'
      },
      certificates: {
        tag: 'CERTIFICATES',
        title: '资质认证',
        desc: '完善的国际认证体系，确保产品质量'
      }
    },
    inquiry: {
      // 表单相关文案已移除 - 联系我们页面仅展示联系方式
    },
    cta: {
      title: '需要定制方案？',
      desc: '我们的工程师团队随时为您提供专业的吨袋包装解决方案',
      btn1: '联系我们'
    },
    footer: {
      quickLinks: '快捷链接',
      products: '产品系列',
      contact: '联系方式',
      followUs: '关注我们',
      copyright: '© 2026 XX吨袋有限公司 版权所有',
      icp: 'ICP备XXXXXXXX号'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      applications: 'Applications',
      manufacturing: 'Manufacturing',
      faq: 'FAQ',
      contact: 'Contact'
    },
    banner: {
      tag: 'PROFESSIONAL FIBC MANUFACTURER',
      title: 'Professional FIBC Manufacturer · 20 Years of Expertise',
      subtitle: '2M pcs/month capacity | 50+ countries | FDA/UN/CE certified',
      cta1: 'Get Quote',
      cta2: 'Download Catalog'
    },
    stats: {
      factory: 'Factory Area',
      capacity: 'Annual Capacity',
      countries: 'Countries',
      experience: 'Years Experience'
    },
    section: {
      advantages: {
        tag: 'CORE ADVANTAGES',
        title: 'Why Choose Us',
        desc: '20 years expertise, source factory, full customization'
      },
      products: {
        tag: 'PRODUCTS',
        title: 'Featured Products',
        desc: 'Full range FIBC products, customizable size/printing/loops'
      },
      applications: {
        tag: 'APPLICATIONS',
        title: 'Application Industries',
        desc: 'Serving chemical, food, pharma, mining, agriculture worldwide'
      },
      manufacturing: {
        tag: 'MANUFACTURING',
        title: 'Manufacturing Strength',
        desc: '20000㎡ modern factory, full process quality control'
      },
      clients: {
        tag: 'OUR CLIENTS',
        title: 'Our Partners',
        desc: 'Exported to 50+ countries, serving industry leaders'
      },
      testimonials: {
        tag: 'TESTIMONIALS',
        title: 'Customer Reviews',
        desc: 'Customer recognition drives our progress'
      },
      certificates: {
        tag: 'CERTIFICATES',
        title: 'Certifications',
        desc: 'Comprehensive international certification system'
      }
    },
    inquiry: {
      // 表单相关文案已移除 - 联系我们页面仅展示联系方式
    },
    cta: {
      title: 'Need Custom Solutions?',
      desc: 'Our engineering team is ready to provide professional FIBC packaging solutions',
      btn1: 'Contact Us'
    },
    footer: {
      quickLinks: 'Quick Links',
      products: 'Product Series',
      contact: 'Contact Us',
      followUs: 'Follow Us',
      copyright: '© 2026 XX FIBC Co., Ltd. All Rights Reserved',
      icp: 'ICP No.XXXXXXXX'
    }
  }
};