import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home.vue'

Vue.use(Router)

const AboutComponent = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');
const UsersComponent = () => import(/* webpackChunkName: "users" */ '@/views/Users.vue');
const UsersDetailComponent = () => import(/* webpackChunkName: "users-detail" */ '@/views/UsersDetail.vue');
const UsersEditComponent = () => import(/* webpackChunkName: "users-edit" */ '@/views/UsersEdit.vue');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/users',
      name: 'users',
      // 라우터에서 정의
      // beforeEnter: (to, from, next) => { // 라우터가 불러와지기 전에 먼저 함수를 실행하고 라우터 동작
      //   console.log('beforeEnter');
      //   next();
      // },
      component: UsersComponent,
      children: [
        {
          path: ":id",
          name: "users-detail",
          component: UsersDetailComponent
        },
        {
          path: ":id/edit",
          name: "users-edit",
          component: UsersEditComponent
        }
      ]
    },
    {
      path: '/*', // 존재하지 않는 라우터
      redirect: { name: 'home' }
    }
  ]
})
