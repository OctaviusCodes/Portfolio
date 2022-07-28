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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNJoP3dThVUnLq3flCmIoXmjq489jH-Ig",
  authDomain: "portfolio-a121a.firebaseapp.com",
  projectId: "portfolio-a121a",
  storageBucket: "portfolio-a121a.appspot.com",
  messagingSenderId: "711540470512",
  appId: "1:711540470512:web:1f8f1cf7a4e5a5e4868835",
  measurementId: "G-1KF7WMX9J6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

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
