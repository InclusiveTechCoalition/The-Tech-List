import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.config.productionTip = false;

new Vue({
    vuetify,
    iconfont: 'mdi',
    render: h => h(App)
}).$mount('#app');
