<template>
  <div class="page">
    <div class="page-content shareRule" style="background: #fff;">
      <div v-html="ruleTxet"></div>
    </div>
  </div>
</template>
<script>
  import { post } from './../utils/httpRequest';
  export default {
    data() {
      return {
        ruleTxet: '',
      }
    },
    mounted() {
      this.getRichText();
      this.WxSdk.init();
    },
    methods: {
      // 获取富文本
      getRichText() {
        post("promote/?method=promoter.distrRule", {}, (re)=> {
          if (re.state) {
            this.ruleTxet = re.data.rule;
          } else {
            $toast.show(re.msg, 1000);
          }
        }, (re)=> {$toast.show(re.msg, 1000)})
      }
    }
  }
</script>
<style>
  .shareRule {
    padding: 10px;
  }
</style>
