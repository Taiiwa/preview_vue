<template>
    <div>
        正在跳转，如果跳转失败，请点击如下链接：
        <a href="http://127.0.0.1/8080/">返回首页</a>
    </div>
    
</template>

<script>

export default {
    name:'weibo',
    mounted:function(){
        var url = this.$route.fullPath
        console.log(url)
        var u_params = url.split('=')[1]
        var uid = u_params.split('%')[0]
        // var uid = utils.getUrlKey('username')
        console.log(uid)
        this.axios({
            url:'http://127.0.0.1:8000/weibo/',
            method:'get',
            params:{
                uid:uid
            }
        }).then(resp=>{
            // console.log(resp.data)
            localStorage.setItem('username',resp.data.username)
            localStorage.setItem('uid',resp.data.uid)
            this.$router.push('/')
        })
    }
}
</script>

<style>

</style>
