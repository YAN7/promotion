<template lang="html">
  <div @click="selectCity" class="citySelect--container">
    <div class="js-citySelestNode citySelect--container__main"></div>
  </div>
</template>
<script>
import { set } from './../utils/storage';
import citySelect  from './../utils/citySelect';
export default {
  data() {
    return {

    }
  },
  props: ['citySelect', 'area'],
  mounted() {
    citySelect.init({
      element: ".js-citySelestNode",
      value: ["广东省", "深圳市", "南山区"],
      callback(data) {
        var result = data.join();
        console.log(result);
        this.area = result;
        set('district', result);
      },
      initComplete(data) {
        var result = data.join();
        this.area = result;
      },
      url: './static/data/city.json'
    });
  },
  methods: {
    // 选择地址
    selectCity() {
      this.$emit("chooseCity");
      citySelect.init({
        element: ".js-citySelestNode",
        value: ["广东省", "深圳市", "南山区"],
        callback(data) {
          var result = data.join();
          this.area = result;
        },
        initComplete(data) {
          var result = data.join();
          this.area = result;
        },
        url: './static/data/city.json'
      });
    }
  }
}
</script>

<style lang="scss">
  .citySelect--container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 100;
    .citySelect--container__main {
      bottom: 0;
      width:100%;
      height:auto;
      padding:0 10px;
      position: fixed;
      background-color:#fff;
    }
  }
</style>
