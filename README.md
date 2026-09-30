# XX吨袋产品网站 (FIBC Website)

专业吨袋（FIBC 集装袋）制造商官方网站，基于纯 HTML + CSS + JavaScript 开发，无构建依赖。

## 🌐 在线预览

GitHub Pages: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## ✨ 功能特性

- ✅ 中英双语切换（i18n）
- ✅ 响应式布局（PC / 平板 / 手机）
- ✅ 单页应用（SPA）+ 哈希路由
- ✅ 询盘表单（已禁用，保留联系方式展示）
- ✅ JSON-LD 结构化数据（SEO）
- ✅ Open Graph（社交分享卡片）
- ✅ 完整的 SEO 优化
- ✅ 产品分类筛选
- ✅ FAQ 折叠面板

## 📂 项目结构

```
fibc-website/
├── index.html              # 入口页面
├── css/
│   └── style.css           # 主样式表
├── js/
│   ├── data.js             # 数据文件（产品/FAQ/客户）
│   └── app.js              # 应用脚本（路由/i18n）
├── images/                  # 产品占位图（SVG）
├── README.md
├── FORMSPREE_SETUP.md      # 表单接入指南（已弃用）
└── .gitignore
```

## 🚀 本地预览

需要通过 HTTP 服务器访问（不要用 file:// 协议）：

### 使用 Python（推荐）
```bash
D:\Python312\python.exe -m http.server 8080
```
访问 http://localhost:8080

### 使用 Node.js
```bash
npx http-server -p 8080
```

### 使用 VS Code
安装 Live Server 插件，右键 index.html → Open with Live Server

## 🎨 技术栈

- 原生 HTML5 + CSS3 + ES6+ JavaScript
- 无任何外部依赖（包括 jQuery / Vue / React）
- 单文件部署友好
- 兼容所有现代浏览器（Chrome / Edge / Safari / Firefox）

## 📝 内容修改

| 修改项 | 文件位置 |
|--------|---------|
| 公司信息 / 产品 / FAQ | `js/data.js` |
| 中英文文案 | `js/data.js` 底部 `I18N` |
| 颜色 / 字体 / 间距 | `css/style.css` 顶部 `:root` |
| 产品图片 | `images/*.svg` |

## 🌐 部署方式

### 1. GitHub Pages（免费）
推送到 GitHub 后，Settings → Pages → 选 main 分支 → 几分钟后可访问

### 2. Vercel / Netlify（推荐）
连接 GitHub 仓库，自动部署 + HTTPS + CDN

### 3. 阿里云 / 腾讯云 OSS
将整个目录上传到 OSS，开启静态网站托管 + 域名绑定

## 📋 页面清单

| 路由 | 页面 | 内容 |
|------|------|------|
| `#/` | 首页 | Banner / 数据 / 优势 / 产品 / 行业 / 客户 / 评价 / 证书 / CTA |
| `#/about` | 关于我们 | 公司简介 + 工厂数据 + 发展历程 |
| `#/products` | 产品中心 | 6 款产品 + 分类筛选 |
| `#/applications` | 应用领域 | 6 大行业卡片 |
| `#/manufacturing` | 生产实力 | 7 步流程 + 4 项检测 |
| `#/faq` | FAQ | 8 个常见问题 |
| `#/contact` | 联系我们 | 联系方式 + 公司位置 + 快捷按钮 |

## 📞 联系

- 📧 Email: sales@xxfibc.com
- 📞 Phone: +86-138-0000-0000
- 📍 地址: XX省XX市XX工业园区XX路88号

## 📄 License

MIT License

---

Made with ❤️ by XX FIBC Co., Ltd.