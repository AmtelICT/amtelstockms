import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/select2.min.css'
import './assets/css/select2-bootstrap4.min.css'
import './assets/css/fontawesome/css/all.min.css'
import './assets/css/tempusdominus-bootstrap-4.min.css'
import './assets/css/OverlayScrollbars.min.css'
import './assets/css/adminlte.css'
import "./assets/css/dataTables.bootstrap4.min.css"
import "./assets/css/responsive.bootstrap4.min.css"
import "./assets/css/buttons.bootstrap4.min.css"

import "datatables.net-dt/js/dataTables.dataTables";
import './assets/js/dataTables.bootstrap4.min.js'
import './assets/js/dataTables.responsive.min.js'

import 'datatables.net-bs4'
import 'datatables.net-responsive'
import './assets/js/adminlte.js'
import './assets/js/select2.full.min.js'
import 'bootstrap'
createApp(App).use(store).use(router).mount('#app')
