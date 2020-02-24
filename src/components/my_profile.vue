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
                        <img :src="photo" alt="" width=100% height=100%>
                    </div>
                    修改头像
                    <form action="">
                        <input type="file" @change='change($event)'>
                    </form>
                    
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
            photo:require("../assets/images/undefined_photo.png"),
            file:''
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
    methods:{
        
        change:function(event){
            console.log('上传头像')
            console.log(event.target.files)
            var data = new FormData()
            data.append('file',event.target.files[0])
            data.append('username',localStorage.getItem('username'))
            this.axios.post('http://127.0.0.1:8000/upload_file/',data,{headers: {'Content-Type': 'multipart/form-data'}}).then(resp=>{
                this.photo = resp.data.data
                localStorage.setItem('img',this.photo)
            })
            // this.axios({
            //     url:'http://127.0.0.1:8000/upload_file/',
            //     method:'post',
            //     data:{
            //         data
            //     },
            //     headers:{'Content-Type': 'multipart/form-data'}
            // })
        }
    }
}
</script>

<style>
#photo_img{
    width:400px;
    height:400px;
    margin:50px 355px;
}
</style>
