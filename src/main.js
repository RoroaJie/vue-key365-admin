import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//清除浏览器默认样式
import './assets/commom/css/all.css'
//字体子自适应
import './assets/commom/js/font.js'
//引入element-ui 组件
import ElementUI from 'element-ui'
// 方式一：引入自定义主题颜色
// import './assets/css/element-variables.scss'
// import './assets/theme/fonts/element-icons.ttf';
// import './assets/theme/fonts/element-icons.woff';
// 方式二：引入自定义主题颜色
// import './assets/theme/element-variables.scss'
//element-ui默认的浅蓝色主题颜色
// import 'element-ui/lib/theme-chalk/index.css';
//方式三：引入自定义主题颜色
import '../theme/index.css'
//使用element-ui
Vue.use(ElementUI);
// 按照以上设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
//引入element-ui 全局配置
// Vue.use(Element, {
//   size: 'small',
//   zIndex: 3000
// });
//按需引入需要的组件 借助 bable-plugin-component 
import {
  Button,
  Select
} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
