<div align='center'>
<h1>Celeris Web</h1>
<img src='https://img2.imgtp.com/2024/04/19/KCFvm76R.png' alt='celeris-web - free and open-source front-end development framework' width='344'/>
</div>

## 简介

Celeris Web是一个免费开源的前端开发框架，采用最新的技术，包括Vue 3、Vite和TypeScript。其monorepo方法使得依赖管理和多个项目的协作变得轻松，
## 特点

- ⚡ [闪电般快速](https://github.com/kirklin/celeris-web#readme)：使用Vue 3，Vite和pnpm构建 🔥
- 💪 [强类型](https://www.typescriptlang.org/)：使用TypeScript 💻
- 📂 [单库存储](https://en.wikipedia.org/wiki/Monorepo)：易于管理依赖项和协作多个项目 🤝
- 🔥 [最新语法](https://github.com/vuejs/rfcs/pull/227)：使用新的< script setup >语法 🆕
- 📦 [自动导入组件](https://github.com/kirklin/celeris-web/blob/master/packages/node/vite/src/plugins/unpluginVueComponets.ts)：自动导入组件 🚚
- 📥 [自动导入API](https://github.com/kirklin/celeris-web/blob/master/packages/node/vite/src/plugins/unpluginAutoImport.ts)：使用unplugin-auto-import直接导入Composition API和其他API 📨
- 💡 [官方路由器](https://router.vuejs.org/)：使用Vue Router v4 🛣️
- 🎉 [加载反馈](https://github.com/rstacruz/nprogress)：使用NProgress提供页面加载进度反馈 🔄
- 🍍 [状态管理](https://pinia.esm.dev/)：使用Pinia进行状态管理 🗃️
- 📜 [中文字体预设](https://github.com/kirklin/unocss-preset-chinese)：包含中文字体预设 🇨🇳
- 🌍 [国际化就绪](https://github.com/kirklin/celeris-web/tree/master/packages/web/locale)：具备使用本地化的国际化功能 🌎
- ☁️ [Netlify准备就绪](https://www.netlify.com/)：在Netlify上零配置部署 ☁️
- 🤖 集成[OpenAI的ChatGPT API](https://openai.com/)：用于自然语言处理 🤖


## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:8888 中看到

```bash
pnpm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。
