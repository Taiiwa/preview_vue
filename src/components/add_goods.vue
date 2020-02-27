<template>
    <div>
        <my_header></my_header>

        <br><br>

        <Breadcrumb :datas='datas'></Breadcrumb>

        <section class='featured-block text-center'>
            <div class='container msg'>
                <div class='msg_key'>商品名 (Name)：</div>
                <div class='msg_value'><input type="text" name='name' v-model="name"></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>

            <div class='container msg'>
                <div class='msg_key'>商品分类 (Category)：</div>
                <div class='msg_value'><select name="cate" id="cate" v-model="cate">
                    <option v-for="(cate,index) in cate_list" :key='index' :value='cate.id'>{{ cate.cate }}</option>
                </select></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>
            
            <div class='container msg'>
                <div class='msg_key'>价格 (Price)：</div>
                <div class='msg_value'><input type="text" name='price' v-model="price"></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>
            
            <div class='container msg'>
                <div class='msg_key'>规格 (Param)：</div>
                <div class='msg_value'><input type="text" name='param' v-model="param"></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>
            
            <div class='container msg'>
                <div class='msg_key'>描述 (Description)：</div>
                <!-- <input type="text" name='desc' v-model="desc"> -->
                <div class='msg_value'><textarea name="desc" v-model="desc" id="desc" cols="30" rows="10"></textarea></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>
            
            <div class='container msg'>
                <div class='msg_key'>图片 (Image):</div>
                <div class='msg_value' style="height:300px"><div style='width:100px;height:100px'><img :src="picture" alt="" width=100% height=100%></div>
                <br>
                <input type="file" name='picture' @change='choose_picture'></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>
            
            <div class='container msg'>
                <div class='msg_key' >视频 (Video)</div>
                <div class='msg_value'  style="height:300px"><video id="player"
                        :src="video"
                        width="300" height="200"
                        autoplay controls >
                        Video player not available.
                </video>
                <br>
                <input type="file" name='video' @change='choose_video'></div>
            </div>
            <br  /><br  />
            <div class='clear'></div>
            
            <div>
                <Button @click='submit'>提交</Button>
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
    name:'reg',
    data:function(){
        return{
            name:'',
            cate:'',
            price:'',
            param:'',
            desc:'',
            picture:'',
            video:'',
            cate_list:[],
            // 面包屑导航
            datas:[{title:'首页',route:{name:'index'}},{title:'上传商品'}],
            temp_goods_picture:'',
            temp_goods_video:'',
        }
    },
    components:{
        // 头部组件
        'my_header':my_header,
        // 底部组件
        'my_footer':my_footer
    },
    created:function(){

        // 获取分类列表
        this.axios.get('http://127.0.0.1:8000/get_cate/').then(resp=>{
            this.cate_list = resp.data.data
        })
        
    },
    // 获取用户信息
    
    mounted:function(){
        this.user = localStorage.getItem('username')
    },

    // 退出时清空临时信息
    beforeDestroy:function(){
        localStorage.removeItem('temp_goods_picture')
        localStorage.removeItem('temp_goods_video')
    },

    methods:{


        // 选择上传图片
        choose_picture:function(e){
            console.log('上传图片')
            console.log(e.target.files)
            var data = new FormData()
            data.append('file',e.target.files[0])
            data.append('temp_goods_picture',localStorage.getItem('temp_goods_picture'))
            this.axios.post('http://127.0.0.1:8000/upload_goods_picture/',data,{headers: {'Content-Type': 'multipart/form-data'}}).then(resp=>{
                // 【【【7，前端获取文件名，展示】】】
                this.picture = 'http://127.0.0.1:8000/static/upload/goods/image_packs/' + resp.data.data
                this.temp_goods_picture = resp.data.data
                // 【【【8，前端将文件名存入到localStorage，下次更换的时候，可以将该文件名交给后端，进行删除或持久化】】】
                localStorage.setItem('temp_goods_picture',this.temp_goods_picture)
            })
        },
        

        // 选择上传视频
        choose_video:function(e){
            console.log('上传视频')
            console.log(e.target.files)
            var data = new FormData()
            data.append('file',e.target.files[0])
            data.append('temp_goods_video',localStorage.getItem('temp_goods_video'))
            this.axios.post('http://127.0.0.1:8000/upload_goods_vedio/',data,{headers: {'Content-Type': 'multipart/form-data'}}).then(resp=>{
                // 【【【7，前端获取文件名，展示】】】
                this.video = 'http://127.0.0.1:8000/static/upload/goods/media/' + resp.data.data
                this.temp_goods_video = resp.data.data
                // 【【【8，前端将文件名存入到localStorage，下次更换的时候，可以将该文件名交给后端，进行删除或持久化】】】
                localStorage.setItem('temp_goods_video',this.temp_goods_video)
            })
        },
        

        submit:function(){
            
            // 验证表单数据类型和是否为空（略）

            // 生成表单数据
            var data = {
                'name':this.name,
                'cate':this.cate,
                'price':this.price,
                'param':this.param,
                'desc':this.desc,
                'img':localStorage.getItem('temp_goods_picture'),
                'video':localStorage.getItem('temp_goods_video')
            };
            
            // 上传请求
            this.axios.get(
                'http://127.0.0.1:8000/add_goods/',
                {params:data}).then(resp=>{
                    if(resp.data.code==200){
                    this.$Message(resp.data.message)
                    this.$router.push('/')
                    }else{
                        this.$Message(resp.data.message)
                    }
        })

        }
    }
}
</script>

<style>
.msg{
    width:600px;
    height:auto;
    clear: both;
    float:none;
    
}
.msg_key{
    width:200px;
    height:auto;
    float: left;
}
.msg_value{
    width:340px;
    height:auto;
    float:left;
    /* clear: both; */
}
.clear{
    width:600px;
    height:auto;
    clear: both;
    float:none;
}
</style>
