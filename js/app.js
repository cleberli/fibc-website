/* ============================================
   吨袋网站 - 主应用脚本（基于 Vue3 CDN）
   - 路由
   - 国际化
   - 表单处理
   ============================================ */

// 简单的 Vue3 路由系统
const routes = {
  '/': 'home',
  '/about': 'about',
  '/products': 'products',
  '/applications': 'applications',
  '/manufacturing': 'manufacturing',
  '/faq': 'faq',
  '/contact': 'contact'
};

// 当前语言
let currentLang = localStorage.getItem('fibc-lang') || 'zh';
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('fibc-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  render();
}

// 当前路由
function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/';
  return routes[hash] || 'home';
}
window.addEventListener('hashchange', render);

// 工具函数
function t(key) {
  const keys = key.split('.');
  let val = I18N[currentLang];
  for (const k of keys) {
    val = val && val[k];
  }
  return val || key;
}

function getProductName(p) {
  return currentLang === 'zh' ? p.nameZh : p.nameEn;
}
function getProductDesc(p) {
  return currentLang === 'zh' ? p.descZh : p.descEn;
}

// ============= 组件渲染函数 =============
function renderHeader() {
  const route = getRoute();
  return `
    <header class="header">
      <div class="container header-inner">
        <a href="#/" class="logo">
          <div class="logo-icon">FIBC</div>
          <span>${currentLang === 'zh' ? SITE_DATA.company.nameZh : SITE_DATA.company.nameEn}</span>
        </a>
        <nav class="nav" id="navMenu">
          <a href="#/" class="${route === 'home' ? 'active' : ''}">${t('nav.home')}</a>
          <a href="#/about" class="${route === 'about' ? 'active' : ''}">${t('nav.about')}</a>
          <a href="#/products" class="${route === 'products' ? 'active' : ''}">${t('nav.products')}</a>
          <a href="#/applications" class="${route === 'applications' ? 'active' : ''}">${t('nav.applications')}</a>
          <a href="#/manufacturing" class="${route === 'manufacturing' ? 'active' : ''}">${t('nav.manufacturing')}</a>
          <a href="#/faq" class="${route === 'faq' ? 'active' : ''}">${t('nav.faq')}</a>
          <a href="#/contact" class="${route === 'contact' ? 'active' : ''}">${t('nav.contact')}</a>
        </nav>
        <div class="lang-switch">
          <button class="${currentLang === 'zh' ? 'active' : ''}" onclick="setLang('zh')">中文</button>
          <button class="${currentLang === 'en' ? 'active' : ''}" onclick="setLang('en')">EN</button>
        </div>
        <button class="menu-toggle" onclick="document.getElementById('navMenu').classList.toggle('mobile-open')">☰</button>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="logo" style="color:#fff;margin-bottom:20px">
              <div class="logo-icon">FIBC</div>
              <span>${currentLang === 'zh' ? SITE_DATA.company.nameZh : SITE_DATA.company.nameEn}</span>
            </div>
            <p style="color:#999;font-size:13px;line-height:1.7">
              ${currentLang === 'zh'
                ? 'XX吨袋有限公司成立于2005年，是专业集装袋制造商，年产能200万条，出口50+国家。'
                : 'XX FIBC Co., Ltd. established in 2005, professional FIBC manufacturer with 2M pcs annual capacity, exported to 50+ countries.'}
            </p>
          </div>
          <div class="footer-col">
            <h4>${t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#/">${t('nav.home')}</a></li>
              <li><a href="#/about">${t('nav.about')}</a></li>
              <li><a href="#/products">${t('nav.products')}</a></li>
              <li><a href="#/applications">${t('nav.applications')}</a></li>
              <li><a href="#/contact">${t('nav.contact')}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${t('footer.products')}</h4>
            <ul>
              <li><a href="#/products">${currentLang==='zh'?'标准吨袋':'Standard FIBC'}</a></li>
              <li><a href="#/products">${currentLang==='zh'?'食品级吨袋':'Food Grade FIBC'}</a></li>
              <li><a href="#/products">${currentLang==='zh'?'UN危险品袋':'UN Dangerous'}</a></li>
              <li><a href="#/products">${currentLang==='zh'?'导电吨袋':'Conductive FIBC'}</a></li>
              <li><a href="#/products">${currentLang==='zh'?'PP编织袋':'PP Woven Bag'}</a></li>
            </ul>
          </div>
          <div class="footer-col footer-contact">
            <h4>${t('footer.contact')}</h4>
            <p>📍 ${SITE_DATA.company.address}</p>
            <p>📞 ${SITE_DATA.company.phone}</p>
            <p>📧 ${SITE_DATA.company.email}</p>
            <p>💬 ${SITE_DATA.company.whatsapp}</p>
          </div>
        </div>
        <div class="footer-bottom">
          ${t('footer.copyright')} · <a href="https://beian.miit.gov.cn" style="color:#999">${t('footer.icp')}</a>
        </div>
      </div>
    </footer>
  `;
}

// ============= 页面渲染函数 =============
function renderHome() {
  const c = SITE_DATA.company;
  return `
    <!-- Banner -->
    <section class="banner">
      <div class="banner-inner">
        <div class="banner-tag">${t('banner.tag')}</div>
        <h1>${t('banner.title')}</h1>
        <p>${t('banner.subtitle')}</p>
        <div class="banner-btns">
          <a href="#/contact" class="btn btn-primary btn-lg">${currentLang==='zh' ? '联系我们' : 'Contact Us'}</a>
          <a href="#/products" class="btn btn-outline btn-lg">${currentLang==='zh'?'查看产品':'View Products'}</a>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-num" data-target="${parseInt(c.factoryArea)}">20000</div>
            <div class="stat-label">${t('stats.factory')} (㎡)</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">200${currentLang==='zh'?'万':'M'}</div>
            <div class="stat-label">${t('stats.capacity')} (${currentLang==='zh'?'条/年':'pcs/year'})</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">50+</div>
            <div class="stat-label">${t('stats.countries')}</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">${new Date().getFullYear() - c.founded}</div>
            <div class="stat-label">${t('stats.experience')} (${currentLang==='zh'?'年':'years'})</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('section.advantages.tag')}</div>
          <h2 class="section-title">${t('section.advantages.title')}</h2>
          <p class="section-desc">${t('section.advantages.desc')}</p>
        </div>
        <div class="advantages">
          ${SITE_DATA.advantages.map(a => `
            <div class="adv-card">
              <div class="adv-icon">${a.icon}</div>
              <h3>${currentLang==='zh'?a.titleZh:a.titleEn}</h3>
              <p>${currentLang==='zh'?a.descZh:a.descEn}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 主推产品 -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('section.products.tag')}</div>
          <h2 class="section-title">${t('section.products.title')}</h2>
          <p class="section-desc">${t('section.products.desc')}</p>
        </div>
        <div class="products">
          ${SITE_DATA.products.slice(0,6).map(p => `
            <div class="product-card">
              <div class="product-image">
                ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
                <img src="${p.image}" alt="${getProductName(p)}" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=font-size:80px;color:#0056A6>📦</div>'">
              </div>
              <div class="product-info">
                <h3>${getProductName(p)}</h3>
                <div class="product-specs">
                  <span class="spec-tag">SWL ${p.swl}</span>
                  <span class="spec-tag">SF ${p.sf}</span>
                  <span class="spec-tag">${p.cert}</span>
                </div>
                <p class="product-desc">${getProductDesc(p)}</p>
                <a href="#/products" class="product-link">${currentLang==='zh'?'查看详情':'View Details'}</a>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:40px">
          <a href="#/products" class="btn btn-primary">${currentLang==='zh'?'查看全部产品':'View All Products'} →</a>
        </div>
      </div>
    </section>

    <!-- 应用领域 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('section.applications.tag')}</div>
          <h2 class="section-title">${t('section.applications.title')}</h2>
          <p class="section-desc">${t('section.applications.desc')}</p>
        </div>
        <div class="applications">
          ${SITE_DATA.applications.map(a => `
            <div class="app-card">
              <div class="app-icon">${a.icon}</div>
              <h3>${currentLang==='zh'?a.nameZh:a.nameEn}</h3>
              <p>${currentLang==='zh'?a.descZh:a.descEn}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 客户 Logo 墙 -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('section.clients.tag')}</div>
          <h2 class="section-title">${t('section.clients.title')}</h2>
          <p class="section-desc">${t('section.clients.desc')}</p>
        </div>
        <div class="logos">
          ${SITE_DATA.logos.map(l => `<div class="logo-item">${l}</div>`).join('')}
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('section.testimonials.tag')}</div>
          <h2 class="section-title">${t('section.testimonials.title')}</h2>
          <p class="section-desc">${t('section.testimonials.desc')}</p>
        </div>
        <div class="testimonials">
          ${SITE_DATA.testimonials.map(t => `
            <div class="testimonial">
              <p class="testimonial-text">${currentLang==='zh'?t.textZh:t.textEn}</p>
              <div class="testimonial-author">
                <div class="author-avatar">${t.author.charAt(0)}</div>
                <div class="author-info">
                  <h4>${t.author}</h4>
                  <p>${currentLang==='zh'?t.company:t.companyEn}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 资质证书 -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('section.certificates.tag')}</div>
          <h2 class="section-title">${t('section.certificates.title')}</h2>
          <p class="section-desc">${t('section.certificates.desc')}</p>
        </div>
        <div class="certs">
          ${SITE_DATA.certificates.map(c => `
            <div class="cert-card">
              <div class="cert-icon">${c.icon}</div>
              <h4>${currentLang==='zh'?c.nameZh:c.nameEn}</h4>
              <p>${currentLang==='zh'?c.descZh:c.descEn}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA 联系我们 -->
    <section class="cta">
      <div class="container">
        <h2>${t('cta.title')}</h2>
        <p>${t('cta.desc')}</p>
        <div class="banner-btns" style="justify-content:center">
          <a href="#/contact" class="btn btn-primary btn-lg">${t('cta.btn1')}</a>
        </div>
      </div>
    </section>
  `;
}

function renderProducts() {
  return `
    <div class="page-banner">
      <div class="container">
        <h1>${t('nav.products')}</h1>
        <div class="breadcrumb">
          <a href="#/">${t('nav.home')}</a> / ${t('nav.products')}
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="filter-bar" id="productFilter">
          <span class="filter-label">${currentLang==='zh'?'分类':'Category'}:</span>
          <button class="filter-chip active" data-cat="all">${currentLang==='zh'?'全部':'All'}</button>
          <button class="filter-chip" data-cat="standard">${currentLang==='zh'?'标准吨袋':'Standard'}</button>
          <button class="filter-chip" data-cat="food">${currentLang==='zh'?'食品级':'Food Grade'}</button>
          <button class="filter-chip" data-cat="un">${currentLang==='zh'?'UN危险品':'UN'}</button>
          <button class="filter-chip" data-cat="conductive">${currentLang==='zh'?'导电':'Conductive'}</button>
          <button class="filter-chip" data-cat="woven">${currentLang==='zh'?'编织袋':'Woven'}</button>
        </div>
        <div class="products" id="productGrid">
          ${SITE_DATA.products.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderProductCard(p) {
  return `
    <div class="product-card" data-cat="${p.category}">
      <div class="product-image">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <img src="${p.image}" alt="${getProductName(p)}" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=font-size:80px;color:#0056A6>📦</div>'">
      </div>
      <div class="product-info">
        <h3>${getProductName(p)}</h3>
        <p style="font-size:12px;color:#999;margin-bottom:8px">${currentLang==='zh'?'型号':'Model'}: ${p.model}</p>
        <div class="product-specs">
          <span class="spec-tag">SWL ${p.swl}</span>
          <span class="spec-tag">SF ${p.sf}</span>
          <span class="spec-tag">${p.cert}</span>
        </div>
        <p class="product-desc">${getProductDesc(p)}</p>
        <a href="#/products" class="product-link">${currentLang==='zh'?'查看详情':'View Details'}</a>
      </div>
    </div>
  `;
}

function renderApplications() {
  return `
    <div class="page-banner">
      <div class="container">
        <h1>${t('nav.applications')}</h1>
        <div class="breadcrumb">
          <a href="#/">${t('nav.home')}</a> / ${t('nav.applications')}
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${currentLang==='zh'?'吨袋应用领域全景':'FIBC Application Areas'}</h2>
          <p class="section-desc">${currentLang==='zh'?'我们的产品服务于6大行业，全球5000+客户的选择':'Our products serve 6 major industries, chosen by 5000+ global customers'}</p>
        </div>
        <div class="applications">
          ${SITE_DATA.applications.map(a => `
            <div class="app-card">
              <div class="app-icon">${a.icon}</div>
              <h3>${currentLang==='zh'?a.nameZh:a.nameEn}</h3>
              <p>${currentLang==='zh'?a.descZh:a.descEn}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderManufacturing() {
  return `
    <div class="page-banner">
      <div class="container">
        <h1>${t('nav.manufacturing')}</h1>
        <div class="breadcrumb">
          <a href="#/">${t('nav.home')}</a> / ${t('nav.manufacturing')}
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${currentLang==='zh'?'现代化生产流程':'Modern Manufacturing Process'}</h2>
          <p class="section-desc">${currentLang==='zh'?'从原料到成品的全流程质量管控':'Full process quality control from raw material to finished product'}</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:12px;text-align:center;margin-bottom:60px">
          ${['拉丝','织布','裁切','印刷','缝制','检测','包装'].map((step,i)=>`
            <div style="padding:24px 8px;background:#fff;border:1px solid #E5E5E5;border-top:3px solid #0056A6">
              <div style="font-size:24px;color:#0056A6;font-weight:bold">${i+1}</div>
              <div style="font-size:14px;margin-top:8px">${currentLang==='zh'?step:['Drawing','Weaving','Cutting','Printing','Sewing','Testing','Packing'][i]}</div>
            </div>
          `).join('')}
        </div>

        <div class="section-header" style="margin-top:60px">
          <h2 class="section-title">${currentLang==='zh'?'检测能力':'Testing Capabilities'}</h2>
        </div>
        <div class="advantages">
          ${[
            {icon:'💪',zh:'拉力测试',en:'Tensile Test',d:'测试袋体和提手的最大承重'},
            {icon:'📉',zh:'跌落测试',en:'Drop Test',d:'从1.2m高度跌落测试袋体完整性'},
            {icon:'☀️',zh:'抗紫外线',en:'UV Resistance',d:'模拟长时间日照后的强度衰减'},
            {icon:'⚡',zh:'防静电测试',en:'Anti-static Test',d:'测试表面电阻和导电性能'}
          ].map(c=>`
            <div class="adv-card">
              <div class="adv-icon">${c.icon}</div>
              <h3>${currentLang==='zh'?c.zh:c.en}</h3>
              <p>${c.d}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderFAQPage() {
  return `
    <div class="page-banner">
      <div class="container">
        <h1>${t('nav.faq')}</h1>
        <div class="breadcrumb">
          <a href="#/">${t('nav.home')}</a> / ${t('nav.faq')}
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="faq-list">
          ${SITE_DATA.faqs.map((f,i) => `
            <div class="faq-item ${i===0?'open':''}" onclick="this.classList.toggle('open')">
              <div class="faq-q">${currentLang==='zh'?f.qZh:f.qEn}</div>
              <div class="faq-a">${currentLang==='zh'?f.aZh:f.aEn}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderAbout() {
  return `
    <div class="page-banner">
      <div class="container">
        <h1>${t('nav.about')}</h1>
        <div class="breadcrumb">
          <a href="#/">${t('nav.home')}</a> / ${t('nav.about')}
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center" class="about-grid">
          <div>
            <div class="section-tag">ABOUT US</div>
            <h2 class="section-title" style="text-align:left;margin-bottom:24px">${currentLang==='zh'?'20年专注集装袋定制':'20 Years of FIBC Expertise'}</h2>
            <p style="color:#666;line-height:1.8;font-size:15px;margin-bottom:20px">
              ${currentLang==='zh'
                ? 'XX吨袋有限公司成立于2005年，是一家专业从事集装袋（吨袋）研发、生产与销售的综合性企业。公司占地面积20000㎡，拥有150名员工，年产能200万条。'
                : 'XX FIBC Co., Ltd. established in 2005, a comprehensive enterprise specializing in R&D, production and sales of FIBC bulk bags. With 20000㎡ factory, 150 employees and 2M pcs annual capacity.'}
            </p>
            <p style="color:#666;line-height:1.8;font-size:15px;margin-bottom:24px">
              ${currentLang==='zh'
                ? '公司引进国际先进的拉丝、织布、缝制生产线，建立完善的检测实验室，严格执行ISO 9001质量管理体系，可生产食品级、导电、UN危险品包装等多种吨袋产品。'
                : 'Equipped with international advanced drawing, weaving and sewing production lines, established comprehensive testing lab, strictly implemented ISO 9001 quality management system.'}
            </p>
            <p style="color:#666;line-height:1.8;font-size:15px">
              ${currentLang==='zh'
                ? '产品远销50多个国家和地区，广泛服务于化工、建材、食品、医药、矿产、农业等行业，是众多世界500强企业的长期供应商。'
                : 'Products exported to 50+ countries, widely serving chemical, construction, food, pharmaceutical, mining, agriculture industries, long-term supplier of many Fortune 500 companies.'}
            </p>
          </div>
          <div style="background:linear-gradient(135deg,#0056A6,#003D75);color:#fff;padding:48px;border-left:6px solid #FF6B00">
            <div style="font-size:60px;margin-bottom:20px">🏭</div>
            <h3 style="font-size:24px;margin-bottom:24px">${currentLang==='zh'?'工厂数据':'Factory Data'}</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
              ${[
                {n:SITE_DATA.company.factoryArea,l:currentLang==='zh'?'工厂面积':'Factory Area'},
                {n:SITE_DATA.company.employees,l:currentLang==='zh'?'员工':'Employees'},
                {n:'200'+ (currentLang==='zh'?'万':'M'),l:currentLang==='zh'?'年产能(条)':'Annual Capacity'},
                {n:'50+',l:currentLang==='zh'?'出口国家':'Countries'}
              ].map(d=>`
                <div style="padding:16px;background:rgba(255,255,255,0.1)">
                  <div style="font-size:28px;font-weight:bold;color:#FF6B00">${d.n}</div>
                  <div style="font-size:13px;margin-top:4px;opacity:0.9">${d.l}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${currentLang==='zh'?'发展历程':'Development History'}</h2>
        </div>
        <div style="max-width:800px;margin:0 auto">
          ${[
            {y:'2005',t:currentLang==='zh'?'公司成立':'Founded'},
            {y:'2010',t:currentLang==='zh'?'通过ISO 9001认证':'ISO 9001 Certified'},
            {y:'2015',t:currentLang==='zh'?'扩建至20000㎡工厂':'Expanded to 20000㎡'},
            {y:'2018',t:currentLang==='zh'?'获得FDA食品级认证':'FDA Food Grade Certified'},
            {y:'2020',t:currentLang==='zh'?'通过UN危险品包装认证':'UN Certified'},
            {y:'2024',t:currentLang==='zh'?'年产能突破200万条':'Capacity 2M pcs/year'}
          ].map((m,i)=>`
            <div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
              <div style="min-width:80px;background:#0056A6;color:#fff;padding:8px 16px;text-align:center;font-weight:bold">${m.y}</div>
              <div style="padding:8px 0;color:#333">${m.t}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderContact() {
  const c = SITE_DATA.company;
  return `
    <div class="page-banner">
      <div class="container">
        <h1>${t('nav.contact')}</h1>
        <div class="breadcrumb">
          <a href="#/">${t('nav.home')}</a> / ${t('nav.contact')}
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="contact-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:40px;max-width:960px;margin:0 auto">
          <div>
            <div class="section-tag">CONTACT US</div>
            <h2 style="font-size:28px;margin-bottom:24px;text-align:left">${currentLang==='zh'?'联系方式':'Contact Information'}</h2>
            <div style="margin-bottom:24px">
              <div style="color:#999;font-size:12px;margin-bottom:4px">${currentLang==='zh'?'地址':'Address'}</div>
              <div style="font-size:15px">${c.address}</div>
            </div>
            <div style="margin-bottom:24px">
              <div style="color:#999;font-size:12px;margin-bottom:4px">${currentLang==='zh'?'销售热线':'Sales Hotline'}</div>
              <div style="font-size:20px;color:#0056A6;font-weight:bold">${c.phone}</div>
            </div>
            <div style="margin-bottom:24px">
              <div style="color:#999;font-size:12px;margin-bottom:4px">${currentLang==='zh'?'售后电话':'Service Hotline'}</div>
              <div style="font-size:15px">${c.servicePhone}</div>
            </div>
            <div style="margin-bottom:24px">
              <div style="color:#999;font-size:12px;margin-bottom:4px">${currentLang==='zh'?'邮箱':'Email'}</div>
              <div style="font-size:15px"><a href="mailto:${c.email}">${c.email}</a></div>
            </div>
            <div style="margin-bottom:24px">
              <div style="color:#999;font-size:12px;margin-bottom:4px">WhatsApp / WeChat</div>
              <div style="font-size:15px">${c.whatsapp}</div>
            </div>
            <div style="margin-top:30px;background:#F0F6FC;padding:20px;border-left:4px solid #FF6B00">
              <strong>${currentLang==='zh'?'工作时间':'Business Hours'}:</strong><br>
              ${currentLang==='zh'?'周一至周六 8:30-18:00':'Mon-Sat 8:30-18:00'}
            </div>
          </div>

          <div>
            <div class="section-tag">LOCATION</div>
            <h2 style="font-size:28px;margin-bottom:24px;text-align:left">${currentLang==='zh'?'公司位置':'Location'}</h2>
            <div style="background:#F0F6FC;height:340px;display:flex;align-items:center;justify-content:center;color:#0056A6;font-size:16px;border:1px solid #E5E5E5">
              <div style="text-align:center">
                <div style="font-size:48px;margin-bottom:16px">📍</div>
                <div>${c.address}</div>
                <div style="margin-top:16px;font-size:12px;color:#999">${currentLang==='zh'?'可嵌入百度地图/Google Map':'Embed Baidu Map / Google Map here'}</div>
              </div>
            </div>
            <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap">
              <a href="tel:${c.phone}" class="btn btn-primary" style="flex:1;min-width:140px">
                📞 ${currentLang==='zh'?'拨打电话':'Call Us'}
              </a>
              <a href="mailto:${c.email}" class="btn btn-outline" style="flex:1;min-width:140px;color:#0056A6;border-color:#0056A6">
                ✉️ ${currentLang==='zh'?'发送邮件':'Email Us'}
              </a>
            </div>
            <div style="margin-top:12px;display:flex;gap:12px;flex-wrap:wrap">
              <a href="https://wa.me/${c.whatsapp.replace(/[^\d]/g,'')}" target="_blank" class="btn" style="flex:1;min-width:140px;background:#25D366;color:#fff">
                💬 WhatsApp
              </a>
              <button onclick="alert('${currentLang==='zh'?'微信号':'WeChat'}: ${c.wechat}')" class="btn" style="flex:1;min-width:140px;background:#07C160;color:#fff">
                💚 ${currentLang==='zh'?'微信':'WeChat'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 表单相关代码已移除 - 联系我们页面仅展示联系方式

function renderCTA() {
  return `
    <section class="cta">
      <div class="container">
        <h2>${t('cta.title')}</h2>
        <p>${t('cta.desc')}</p>
        <div class="banner-btns" style="justify-content:center">
          <a href="#/contact" class="btn btn-primary btn-lg">${t('cta.btn1')}</a>
        </div>
      </div>
    </section>
  `;
}

// 表单提交函数已移除 - 联系我们页面仅展示联系方式

// ============= 主渲染函数 =============
function render() {
  const route = getRoute();
  const app = document.getElementById('app');

  let content = '';
  switch(route) {
    case 'home': content = renderHome(); break;
    case 'about': content = renderAbout(); break;
    case 'products': content = renderProducts(); break;
    case 'applications': content = renderApplications(); break;
    case 'manufacturing': content = renderManufacturing(); break;
    case 'faq': content = renderFAQPage(); break;
    case 'contact': content = renderContact(); break;
    default: content = renderHome();
  }

  app.innerHTML = renderHeader() + content + renderFooter();

  // 产品筛选绑定
  if (route === 'products') {
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.cat;
        document.querySelectorAll('.product-card').forEach(card => {
          if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // SEO 更新
  document.title = `${currentLang==='zh' ? SITE_DATA.company.nameZh : SITE_DATA.company.nameEn} - ${t('banner.title')}`;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  render();
});

// 暴露到全局
window.setLang = setLang;
window.submitInquiry = submitInquiry;