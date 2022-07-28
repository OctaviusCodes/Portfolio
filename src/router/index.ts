import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import MyProjectsView from '@/views/MyProjectsView.vue'
import KnowledgeAndToolsView from '@/views/KnowledgeAndToolsView.vue'
import EducationAndCertificationsView from '@/views/EducationAndCertificationsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutMeView
    },
    {
      path: '/experience',
      name: 'Experience',
      component: ExperienceView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: MyProjectsView
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: KnowledgeAndToolsView
    },
    {
      path: '/education',
      name: 'Education',
      component: EducationAndCertificationsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
    ]
})
export default router