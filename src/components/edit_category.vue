<template>
    <div>
        <my_header></my_header>

        <br><br>

        <Breadcrumb :datas='datas'></Breadcrumb>

        <section class='featured-block text-center'>
            <div class='container'>
                <div>
                    <!-- 2020年2月27日 HEYUI表单和弹窗自学 -->
                    <!-- <p><h-switch v-model="border" small>显示边框</h-switch> <h-switch v-model="stripe" small>栅格背景</h-switch></p> -->
                    <!-- <p><h-switch v-model="checkbox" small>多选</h-switch> <h-switch v-model="serial" small>显示序号</h-switch> <h-switch v-model="show" small>切换显示</h-switch></p> -->
                    <!-- <p><h-switch v-model="loading" small>loading</h-switch></p> -->
                    <p>
                        <input type="text" v-model='new_cate'>
                    <Button color="blue" icon="h-icon-plus" @click="add">添加分类</Button>
                    <!-- <Button color="primary" @click="cate_list=[]">清空数据</Button> -->
                    </p>
                    <Table :datas="cate_list" :border="border" :checkbox="checkbox" :stripe="stripe" :loading="loading">
                        <!-- <TableItem title="序号" prop="$serial" v-if="serial"></TableItem> -->
                        <TableItem title="类型" prop="cate"></TableItem>
                        <TableItem title="操作" :width="100" fixed="right"><template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-green" @click="reset(cate_list,data)"><i class="h-icon-setting"></i></button></template></TableItem>
                        <TableItem title="操作" :width="100" fixed="right"><template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-red" @click="remove(cate_list, data)"><i class="h-icon-trash"></i></button></template></TableItem>
                        <TableItem v-if="show" title="Address-切换显示" align="right" prop="address"></TableItem>
                        <div slot="empty">暂时无数据</div>
                    </Table>

                    <!-- <p>{{value}}</p> -->
                    <!-- 弹窗输入框 -->
                    <Modal v-model="openModal">
                        <modal_category :fruit="value" :params="{subparam: 'test1'}" @close="openModal=false" @success="success"></modal_category>
                    </Modal>
                    
                </div>
            </div>
            <br  /><br  />
        </section>

        <my_footer></my_footer>

    </div>
</template>

<script>

// 组件包含
import my_header from './my_header';
import my_footer from './my_footer';
import modal_category from './modal_category';
export default {
    name:'reg',
    data:function(){
        return{
            // 面包屑导航
            datas:[{title:'首页',route:{name:'index'}},{title:'管理分类'}],
            // 表单数据
            new_cate: '',
            show: false,
            border: false,
            stripe: true,
            checkbox: false,
            serial: false,
            loading: false,
            cate_list: [],
            openModal:false,
            value:null
        }
    },

    // 获取分类信息
    created:function(){
        this.axios.get('http://127.0.0.1:8000/get_cate/').then(resp=>
        this.cate_list = resp.data.data
        )
    },

    components:{
        // 头部组件
        'my_header':my_header,
        // 底部组件
        'my_footer':my_footer,
        modal_category,
    },
    methods:{
        remove(cate_list, data) {
            // 请求删除接口
            this.axios.get('http://127.0.0.1:8000/delete_cate/',{params:{id:data['id']}}).then(resp=>{
                this.$Message('删除成功')
                this.$router.go(0)
            })
            },
        add(){
            // 发送请求，传入this.new_cate
            this.axios.get('http://127.0.0.1:8000/add_cate/',{params:{new_cate:this.new_cate}}).then(resp=>{
                this.$Message('添加成功')
                this.$router.go(0)
            })
        },
        success(data) {
            this.value = data;
            // 发送请求，传入缓存中的id，和修改后的名称data
            this.axios.get('http://127.0.0.1:8000/reset_cate/',{params:{cid:sessionStorage.getItem('cid'),cate:data}}).then(resp=>{
                console.log(resp.data.code)
                this.$Message('修改成功')
                this.$router.go(0)
            })
        },
        reset(cate_list,data){
            this.openModal = true
            console.log(cate_list)
            // 可以正确获取到cate和id，因为遇到io，暂时将id存入到缓存。
            console.log(data['cate'])
            console.log(data['id'])
            sessionStorage.setItem('cid', data['id'])

        }
    },
}
</script>

<style>

</style>
