import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import ContactView from '@/views/ContactView.vue'
import ArticleView from '@/views/ArticleView.vue'
import EditView from '@/views/EditView.vue'
import UserView from '@/views/UserView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserSettingsView from '@/views/UserSettingsView.vue'
import NavTestView from '@/views/NavTestView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 懶載入: 有點擊連進來時才進行戴入的動作
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView,
      props: true
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      children: [
        {
          path: '',
          component: UserProfileView
        },
        {
          path: 'posts',
          component: UserPostsView
        },
        {
          path: 'settings',
          component: UserSettingsView
        },
      ]
    },
    {
      path: '/nav-test',
      name: 'navtest',
      component: NavTestView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: () => {
        const isLogin = localStorage.getItem('isLogin') == 'true'
        if (!isLogin) {
          alert('沒有管理權限!')
          return false
        }
      }
    },
  ],
})

export default router
