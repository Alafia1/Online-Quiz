import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionView from '../views/QuestionView.vue'
import CourseView from '../views/CourseView.vue'
import NewQuizView from '../views/NewQuizView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: DefaultLayout,
      meta: {requiresAuth: true},
      children: [
        { path: '/home', name: 'Home', component: HomeView },
        { path: '/question', name: 'Question', component: QuestionView },
        { path: '/course', name: 'Course', component: CourseView },
        { path: '/new', name: 'NewQuiz', component: NewQuizView }
      ]
      

    },
    {
      path: '/auth',
      redirect: '/login',
      component: AuthLayout,
      meta: {requiresAuth: false},
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
      ]
  
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.meta.requiresAuth && !store.state.user.token){
    next({name: 'Login'})
  } else if(store.state.user.token && (to.name === 'Login' || to.name === 'Register')){
    next({name: 'Home'});
  } else {
    next();
  }
})

export default router
