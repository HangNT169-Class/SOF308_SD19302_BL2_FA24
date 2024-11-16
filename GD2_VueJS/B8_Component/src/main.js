import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './component/GlobalComponent.vue'

// createApp(App).mount('#app')
// Dang ky component toan cau
// => Moi noi goi duoc  khong can import
// => main.js

const app = createApp(App)
// Dang ky component o giua
// BAT BUOC VIET TREN MOUNT
app.component('ComponetA', GlobalComponent)
app.mount('#app')
