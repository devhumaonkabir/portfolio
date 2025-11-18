import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import DefaultComponent from "./components/DefaultComponent.vue";

createApp(DefaultComponent).mount('#app')

// const app = createApp({});
// app.component('default-component', DefaultComponent);
// app.mount('#app');