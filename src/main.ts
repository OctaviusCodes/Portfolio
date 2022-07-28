import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
import router from './router'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
import DynamicSmallCard from './components/CardSmall.vue'
import DynamicCard from './components/Card.vue'
import ContactCard from './components/ContactCard.vue'
import ContactForm from './components/ContactForm.vue'
import ModalContact from './components/ModalContact.vue'
import SoMe from './components/SoMe.vue'
import TopButton from './components/TopButton.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.css'

const app = createApp(App)

app.component('NavigationBar', NavigationBar)
app.component('Footer',Footer)
app.component('DynamicCard', DynamicCard)
app.component('DynamicSmallCard',DynamicSmallCard)
app.component('ContactCard', ContactCard)
app.component('ContactForm',ContactForm)
app.component('ModalContact',ModalContact)
app.component('TopButton',TopButton)
app.component('SoMe',SoMe)
app.component('BootstrapVue',BootstrapVue)

app.use(router)

app.mount('#app')
