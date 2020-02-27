<template>
    <div>
        <header class="h-modal-header">修改分类</header>
        <div style="padding:15px">
            <input type="text" v-model="value">
        </div>
        <footer class="h-modal-footer">
            <button class="h-btn h-btn-primary" @click="success">确定</button>
            <button class="h-btn" @click="close">关闭</button>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    params: Object,
    fruit: String
  },
  data() {
    return {
      value: this.fruit
    };
  },
  computed: {
    ...mapGetters({
      test: 'getTest'
    })
  },
  methods: {
    success:function() {
      // 向外层触发事件, 1.17.0 之前
      // this.$emit('event', 'update', this.value);

      // 直接使用emit触发外部的events监听，兼容性 1.18.0+
      this.$emit('success', this.value);
      this.close();
    },
    
    close:function() {
      this.$emit('close');
    }
  }
};
</script>

<style>

</style>
