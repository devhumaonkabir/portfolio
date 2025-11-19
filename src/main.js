import { createApp } from 'vue'
import './style.css'
import DefaultComponent from "./components/DefaultComponent.vue";
import router from "./router";


const app = createApp(DefaultComponent);
app.use(router);
app.mount('#app');