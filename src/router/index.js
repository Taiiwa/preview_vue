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

Vue.use(Router)

var routes = [
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
