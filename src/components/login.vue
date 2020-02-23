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
                <!-- 验证码： -->
                <center>

                    <div>
                        <drag-verify
                        
                            :width='width'
                            :height='height'
                            :text='text'
                            ref='Verify'

                        ></drag-verify>
                    </div>

                </center>
                <!-- <input type="text" name='code' v-model="code">
                <img :src="code_url" style="width:110px;height:40px;cursor:pointer;" @click='update_code'> -->
            </div>
            <br  /><br  />
            <div>
                <Button @click='submit'>登录</Button>
            </div>

            <br><br>
            
            <div>
                <img src="http://127.0.0.1:8000/static/sina.png" alt="" @click='weibo'>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <img src="http://127.0.0.1:8000/static/dingding.png" alt="" @click='dingding'>
            </div>

        </section>
        
        <my_footer></my_footer>
    </div>
</template>

<script>
import my_header from './my_header'
import my_footer from './my_footer';
import dragVerify from 'vue-drag-verify';
export default {
    name:'reg',
    data:function(){
        return{
            username:'',
            password:'',
            code:'',
            code_url:'http://localhost:8000/code',
            // 面包屑导航
            datas:[{title:'首页',route:{name:'index'}},{title:'登录页面'}],
            // 验证码属性
            width:300,
            height:35,
            text:"请将滑块拖动到最右端",
        }
    },
    components:{
        // 头部组件
        'my_header':my_header,
        'my_footer':my_footer,
        'dragVerify':dragVerify,
    },
    mounted:function(){
        
    },
    methods:{
        // 钉钉登录
        dingding:function(){
            var appid = 'dingoaukgkwqknzjvamdqh'
            var redirect_uri = 'http://localhost:8000/dingding_back/'

            var url = 'https://oapi.dingtalk.com/connect/qrconnect?appid='+appid+'&response_type=code&scope=snsapi_login&state=STATE&redirect_uri='+redirect_uri

            window.location.href = url
        },

        // 新浪微博登录
        weibo:function(){
            let url = 'https://api.weibo.com/oauth2/authorize?client_id=2636039333&redirect_uri=http://127.0.0.1:8000/md_admin/weibo'

            // 跳转
            window.location.href = url;
        },

        submit:function(){

            // 判断是否拖动滑块
            if(!this.$refs.Verify.isPassing){
                this.$Message('请拖动滑块完成验证')
                return false
            }

            if(this.username==''){
                this.$Message('用户名不能为空')
                return false}
            if(this.password==''){
                this.$Message('请输入密码')
                return false}
            
            this.axios.get(
                'http://localhost:8000/login/',{
                    params:{
                        username:this.username,password:this.password
                    }
                }
            ).then(resp=>{
                var msg = resp.data
                this.$Message(resp.data.message)
                localStorage.setItem('username',msg.username)
                localStorage.setItem('uid',msg.uid)
                console.log(msg)
                console.log(localStorage)
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
