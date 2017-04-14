import VueRouter from 'vue-router'

// Containers
import Full from '../containers/Full'

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: function (resolve) {require(['../views/Dashboard.vue'], resolve)}
        },
        {
          path: 'news',
          name: 'News',
          component: function (resolve) {require(['../views/News.vue'], resolve)}
        },
        {
          path: 'posts',
          redirect: '/posts/post',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'category',
              component: function (resolve) {require(['../views/posts/category.vue'], resolve)}
            },
            {
              path: 'tag',
              component: function (resolve) {require(['../views/posts/Tag.vue'], resolve)}
            },
            {
              path: 'post',
              component: function (resolve) {require(['../views/posts/Post.vue'], resolve)}
            },
            {
              path: 'comment',
              component: function (resolve) {require(['../views/posts/Comment.vue'], resolve)}
            }
          ]
        }
      ]
    }
  ]
})
