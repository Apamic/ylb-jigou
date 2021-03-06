// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Axios from '@/api/axios.js'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false
Vue.use(ElementUI);

// 富文本编辑器：
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
// 复制插件：
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
