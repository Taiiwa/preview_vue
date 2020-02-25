<template>
    <div>
        <my_header></my_header>

        <br  /><br  />

        <Breadcrumb :datas='datas'></Breadcrumb>

        <section class='featured-block text-center'>
            <div class='container'>
                    <!-- 嵌入音频 -->
                    <audio :src="src" id="myAudio"  autoplay controls >Audio player not available.</audio>
                    <br>

                    上传音频
                    <input type="file" @change="audio">
                    <br>
                    <br>
                    <video id="player"
                        :src="src2"
                        width="300" height="200"
                        autoplay controls >
                        Video player not available.
                    </video>
                    上传视频
                    <input type="file" @change="video">
                    <br>
                    <br>

                    上传音频到七牛云
                    <input type="file" @change="upload_qiniu">
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
            datas:[{title:'首页',route:{name:'index'}},{title:'上传音频'}],
            code:'',
            src:'',
            src2:'',
            file:'',
            up_token:'',
        }
    },
    // 定义组件
    components:{
        'my_header':my_header,
        'my_footer':my_footer,
    },
    // 初始化用户信息
    mounted:function(){
        this.user = localStorage.getItem('username')
        if(localStorage.getItem('img')){
            this.photo = localStorage.getItem('img')
            console.log(this.photo)
        }
    },
    mounted:function(){
        // 获取秘钥
        this.get_token()
    },
    methods:{

        // 上传七牛云
        upload_qiniu:function(e){

            // 声明文件对象：
            let file = e.target.files[0];

            // 声明参数类型：
            let param = new FormData();

            // 添加文件：
            param.append('file',file)
            param.append('token',this.up_token)
            console.log(this.up_token)

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
        
        audio:function(event){
            console.log('上传音频')
            console.log(event.target.files)
            var data = new FormData()
            data.append('file',event.target.files[0])
            data.append('username',localStorage.getItem('username'))
            this.axios.post('http://127.0.0.1:8000/upload_file/',data,{headers: {'Content-Type': 'multipart/form-data'}}).then(resp=>{
                this.src = resp.data.data
                localStorage.setItem('src',this.src)
            })
        },
        video:function(event){
            console.log('上传视频')
            console.log(event.target.files)
            var data = new FormData()
            data.append('file',event.target.files[0])
            data.append('username',localStorage.getItem('username'))
            this.axios.post('http://127.0.0.1:8000/upload_file/',data,{headers: {'Content-Type': 'multipart/form-data'}}).then(resp=>{
                this.src = resp.data.data
                localStorage.setItem('src',this.src)
            })
        },

        

        // 获取令牌方法：
        get_token(){
            // 发送请求
            this.axios.get('http://localhost:8000/up_token/').then(result=>{
                this.up_token = result.data.up_token
                console.log(result.data)
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
