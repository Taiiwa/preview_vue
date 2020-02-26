<template>
    <div>
        <my_header></my_header>

        <br><br>

        <Breadcrumb :datas='datas'></Breadcrumb>

        <section class='featured-block text-center'>
            <div class='container'>
                原密码：
                <input type="password" name='old_password' v-model="old_password">
            </div>
            <br  /><br  />
            <div>
                新密码:
                <input type="password" name='new_password' v-model="new_password">
            </div>
            <br  /><br  />
            <div>
                再次输入新密码：:
                <input type="password" name='check_password' v-model="check_password">
            </div>
            <br  /><br  />
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
            old_password:'',
            new_password:'',
            check_password:'',
            // 面包屑导航
            datas:[{title:'首页',route:{name:'index'}},{title:'修改密码'}]
        }
    },
    components:{
        // 头部组件
        'my_header':my_header,
        // 底部组件
        'my_footer':my_footer
    },
    methods:{
        submit:function(){

            // 判断两次密码是否输入一致
            if(this.new_password != this.check_password){
                this.$Message('两次密码输入不一致！')
                return false
            }

            // 判断每个输入框是否有数据
            if(!this.old_password){
                this.$Message('请输入原密码')
                return false
            }
            if(!this.new_password){
                this.$Message('请输入新密码')
                return false
            }
            

            var data = new FormData
            // 创建返回数据
            data.append('uid',localStorage.getItem('uid'))
            data.append('old_password',this.old_password)
            data.append('new_password',this.new_password)
            this.axios.post('http://127.0.0.1:8000/password_change/',data).then(resp=>{
                let code = resp.data.code
                if(code==200){
                    this.$Message('修改成功，请牢记您的密码')
                    // 返回个人中心
                    this.$router.push('/my_profile/')

                }else{
                    this.$Message('密码错误，请重新输入')
                }
            })
            

        }
    }
}
</script>

<style>

</style>
