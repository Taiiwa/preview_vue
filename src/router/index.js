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
import upload from '@/components/upload'
import password_change from '@/components/password_change'
import add_goods from '@/components/add_goods'
import edit_category from '@/components/edit_category'

Vue.use(Router)

// 定义登录拦截器
var check_login = (to,from,next)=>{

    // 判断是否登录
    if(localStorage.getItem('username')){
      console.log('已登录');
      next();
    }else{
      alert('您尚未登录，请先登录')
      next('/login')
    }
  }

// 定义权限拦截器
var manager_type = (to,from,next) =>{

  // 判断是否是管理员。这个条件达成时，肯定是在登录状态，不需要再验证登录
  if(localStorage.getItem('type')==1){
    console.log('是管理员')
    next();
  }else{
    alert('权限错误')
    next('/')
  }

}


var routes = [
        {
          path:'/edit_category',
          name:'edit_category',
          component:edit_category,
          // 应用权限拦截器
          beforeEnter:manager_type
        },
        {
          path:'/add_goods',
          name:'add_goods',
          component:add_goods,
          // 应用权限拦截器
          beforeEnter:manager_type
        },
        {
          path:'/password_change',
          name:'password_change',
          component:password_change,
          // 拦截器
          beforeEnter:check_login
        },
        {
          path:'/upload',
          name:'upload',
          component:upload
        },
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
