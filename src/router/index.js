import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import item from '@/components/item'
import detail from '@/components/detail'
import mytest from '@/components/mytest'
import reg from '@/components/reg'
import login from '@/components/login'
import weibo from '@/components/weibo'
import dingding from '@/components/dingding'
import my_profile from '@/components/my_profile'


Vue.use(Router)

var routes = [
        {
          path:'/my_profile',
          name:'my_profile',
          component:my_profile,
          // 拦截器
          beforeEnter:(to,from,next)=>{

            // 判断是否登录
            if(localStorage.getItem('username')){
              console.log('已登录');
              next();
            }else{
              alert('您尚未登录，请先登录')
              next('/login')
            }
          }
        },
        {
          path:'/',
          name:'index',
          component:index
        },
        {
          path:'/cart',
          name:'cart',
          component:cart
        },
        {
          path:'/item',
          name:'item',
          component:item
        },
        {
          path:'/detail',
          name:'detail',
          component:detail
        },
        {
          path:'/mytest',
          name:'mytest',
          component:mytest
        },
        {
          path:'/reg',
          name:'reg',
          component:reg
        },
        {
          path:'/login',
          name:'login',
          component:login
        },
        {
          path:'/weibo',
          name:'weibo',
          component:weibo
        },
        {
          path:'/dingding',
          name:'dingding',
          component:dingding
        }
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
