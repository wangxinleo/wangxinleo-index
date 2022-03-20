import ElementUI from "element-ui";
import 'animate.css';
import "element-ui/lib/theme-chalk/index.css";
// import './public/js/sakura.js';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    // 使用element-ui
    Vue.use(ElementUI);
    // Vue.use(Animate);
    
    // document && integrateGitalk(router);
  } catch (e) {
    console.error(e.message);
  }
};
