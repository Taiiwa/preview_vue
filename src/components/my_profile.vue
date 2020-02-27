<template>
    <div>
        <my_header></my_header>

        <br  /><br  />

        <Breadcrumb :datas='datas'></Breadcrumb>

        <section class='featured-block text-center'>
            
            <div class='container'>
                    <h2>{{ user }}</h2>
                    <!-- 展示当前头像 -->
                    <div id = 'photo_img'> 
                        <center>
                        <Avatar :src="photo" :width='width' fit='fill'></Avatar>
                        </center>
                        <!-- <img :src="photo" alt="" width=100% height=100%> -->
                    </div>
                    修改头像
                    <!-- 
                        【【【2020年2月26日     修改头像逻辑：】】】
                            1，进入页面，在created钩子中获取localStorage中的头像。该头像在登录时请求数据库获得
                            2，前端上传头像
                            3，前端请求后端接口，传入当前文件，和localStorage中的临时头像名
                            4，后端获取文件名，以uuid重命名，并保存到本地
                            5，后端尝试获取localStorage中的临时头像，如果获取到了，则删除
                            6，后端返回uuid重命名后的文件名
                            7，前端获取文件名，展示
                            8，前端将文件名存入到localStorage，下次更换的时候，可以将该文件名交给后端，进行删除或持久化
                            9，（1）前端点击提交，将localStorage中的临时头像设为正式头像，后端将localStorage中的文件名存入到数据库
                            9，（2）前端离开页面，利用beforeDestroy钩子请求后端删除localStorage中的文件
                     -->
                    <form action="">
                        <!-- 2，前端上传头像 -->
                        <input type="file" @change='change($event)'>
                        <br><br>
                        <Button color='red' @click='con_submit'>保存头像</Button>
                    </form>
                    <br>
                    <br>
                    <div v-show="false">
                        七牛云上传图片：
                        <input type="file" @change='upload_qiniu'>
                    </div>
                    

                    <div>
                        <a href="/password_change"><Button>修改密码</Button></a>
                    </div>
                    <div>
                        <a href="/add_goods"><Button>上传商品</Button></a>
                    </div>
                    <div>
                        <a href="/edit_category"><Button>管理分类</Button></a>
                    </div>
                    
                    
            </div>
        </section>

        <my_footer></my_footer>

    </div>
</template>

<script>
// 组件包含
import my_header from './my_header';
import my_footer from './my_footer';
export default {
    data(){
        return{
            user:'',
            password:'',
            datas:[{title:'首页',route:{name:'index'}},{title:'我的主页'}],
            code:'',
            src:'http://127.0.0.1:8000/my_code',
            // 未设置头像时的默认头像
            photo:require("../assets/images/undefined_photo.png"),
            file:'',
            up_token:'',
            temp_img:'',
            width:400,
        }
    },
    // 定义组件
    components:{
        'my_header':my_header,
        'my_footer':my_footer,
    },
    // 初始化用户信息
    // 【【【1，进入页面，在created钩子中获取localStorage中的头像。该头像在登录时请求数据库获得】】】
    
    mounted:function(){
        this.user = localStorage.getItem('username')
        if(localStorage.getItem('img')){
            this.photo = 'http://127.0.0.1:8000/static/upload/' + localStorage.getItem('img')
            console.log(this.photo)
        }
        // 获取秘钥
        this.get_token()
    },

    // 【【【9，（2）前端离开页面，利用beforeDestroy钩子请求后端删除localStorage中的文件】】】
    beforeDestroy:function(){

        this.axios.get('http://127.0.0.1:8000/delete_temp_img',{params:{img:localStorage.getItem['temp_img']}}).then(resp=>{
            console.log(resp.data.code)
        })

    },

    methods:{

        // 【【【9，（1）前端点击提交，将localStorage中的临时头像设为正式头像，后端将localStorage中的文件名存入到数据库】】】
        con_submit:function(){

            // 将localStorage中的临时头像设为正式头像
            localStorage.setItem('img',localStorage.getItem('temp_img'));

            // 删除临时图片存储
            localStorage.removeItem('temp_img');

            // 请求后端接口，传入uid和图片名，做持久化
            this.axios.get('http://127.0.0.1:8000/con_submit/',{params:{uid:localStorage.getItem('uid'),img:localStorage.getItem('img')}}).then(resp=>{

                // 成功后跳转回首页
                this.$Message(resp.data.message)
                this.$router.push('/')

            })

        },

        // 上传七牛云
        upload_qiniu:function(e){

            // 声明文件对象：
            let file = e.target.files[0];

            // 声明参数类型：
            let param = new FormData();

            // 添加文件：
            param.append('file',file)
            param.append('token',this.up_token)

            // 定制axios请求：
            const axios_qiniu = this.axios.create({withCredentails: false})

            // 建立链接
            axios_qiniu({
                method: 'POST',
                url:'http://up-z1.qiniu.com',
                data:param,
                timeout:30000,
            }).then(result=>{
                console.log(result);
            })

        },
        
        // 【【【3，前端请求后端接口，传入当前文件，和localStorage中的临时头像名】】】
        change:function(event){
            console.log('上传头像')
            console.log(event.target.files)
            var data = new FormData()
            data.append('file',event.target.files[0])
            data.append('username',localStorage.getItem('username'))
            data.append('temp_img',localStorage.getItem('temp_img'))
            this.axios.post('http://127.0.0.1:8000/upload_file/',data,{headers: {'Content-Type': 'multipart/form-data'}}).then(resp=>{
                // 【【【7，前端获取文件名，展示】】】
                this.photo = 'http://127.0.0.1:8000/static/upload/' + resp.data.data
                this.temp_img = resp.data.data
                // 【【【8，前端将文件名存入到localStorage，下次更换的时候，可以将该文件名交给后端，进行删除或持久化】】】
                localStorage.setItem('temp_img',this.temp_img)
            })
        },

        // 获取令牌方法：
        get_token(){
            // 发送请求
            this.axios.get('http://localhost:8000/up_token/').then(result=>{
                this.up_token = result.data.up_token
            })
        }

    },
    
}
</script>

<style>
#photo_img{
    width:400px;
    height:400px;
    margin:50px 355px;
}
</style>
