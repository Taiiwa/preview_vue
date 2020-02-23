<template>
    <div>
        正在跳转，如果跳转失败，请点击如下链接：
        <a href="http://127.0.0.1/8080/">返回首页</a>
    </div>
    
</template>

<script>

export default {
    name:'dingding',
    mounted:function(){
        var username = this.$route.query.username
        var uid = this.$route.query.uid
        localStorage.setItem('username',username)
        localStorage.setItem('uid',uid)
        this.$router.push('/')
    }
}
</script>

<style>

</style>
