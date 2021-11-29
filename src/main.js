import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import './styles/custom.scss'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App)
}).$mount('#app')
