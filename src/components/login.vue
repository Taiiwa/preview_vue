<template>
    <div>
        <my_header></my_header>

        <br><br>

        <Breadcrumb :datas='datas'></Breadcrumb>

        <section class='featured-block text-center'>
            <div class='container'>
                用户名：
                <input type="text" name='username' v-model="username">
            </div>
            <br  /><br  />
            <div>
                密码:
                <input type="password" name='password' v-model="password">
            </div>
            <br  /><br  />
            <div>
                验证码：
                <input type="text" name='code' v-model="code">
                <img :src="code_url" style="width:110px;height:40px;cursor:pointer;" @click='update_code'>
            </div>
            <br  /><br  />
            <div>
                <Button @click='submit'>登录</Button>
            </div>
        </section>
        
        <my_footer></my_footer>
    </div>
</template>

<script>
import my_header from './my_header'
import my_footer from './my_footer';
export default {
    name:'reg',
    data:function(){
        return{
            username:'',
            password:'',
            code:'',
            code_url:'http://localhost:8000/code',
            // 面包屑导航
            datas:[{title:'首页',route:{name:'index'}},{title:'登录页面'}]
        }
    },
    components:{
        // 头部组件
        'my_header':my_header,
        'my_footer':my_footer
    },
    mounted:function(){
        
    },
    methods:{
        submit:function(){
            console.log(1)
            if(this.username==''){
                alert('用户名不能为空')
                return false}
            if(this.password==''){
                alert('请输入密码')
                return false}
            if(this.code==''){
                alert('请输入验证码')
                return false
            }
            this.axios.get(
                'http://localhost:8000/login/',{
                    params:{
                        username:this.username,password:this.password,code:this.code
                    }
                }
            ).then(resp=>{
                var msg = resp.data
                this.$Message(resp.data.message)
                sessionStorage['username'] = msg.username
                sessionStorage['uid'] = msg.uid
                console.log(msg)
                console.log(sessionStorage)
                this.$router.push('/')
            })
            
            
        },
        update_code:function(){
            this.code_url='http://localhost:8000/code?random='+Math.random()
        }
    }
}
</script>

<style>

</style>
