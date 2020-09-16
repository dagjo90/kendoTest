import Vue from 'vue'
import App from './App.vue'
import { Grid } from '@progress/kendo-vue-grid'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { LayoutInstaller, TabStrip } from '@progress/kendo-layout-vue-wrapper'
import { Input } from '@progress/kendo-vue-inputs';
import { Button,
  ButtonGroup,
  ButtonGroupButton,
  ToolBar,
  ToolBarItem,
  ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'


Vue.config.productionTip = false
Vue.component('Grid', Grid);
Vue.use(axios);
Vue.use(ButtonsInstaller);
Vue.component('k-input', Input);
Vue.use(LayoutInstaller);
Vue.use(Button);
Vue.use(TabStrip);
Vue.use(ButtonGroup);
Vue.use(ButtonGroupButton);
Vue.use(ToolBar);
Vue.use(ToolBarItem);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
