<template>
  <div class="stepBlock" v-if="options.direction == 'left'">
    <div class="step__left" :style="options.desc3 ? styleObj: ''">
      <h3 class="step__left--title">{{options.title}}</h3>
      <p class="step__left--desc">{{options.desc1}}</p>
      <p class="step__left--desc">{{options.desc2}}</p>
      <p v-if="options.desc3" class="step__left--desc">{{options.desc3}}</p>
    </div>
    <div class="step__right">
      <img :src="options.imgUrl" alt="" :style="options.urlWidth ? options.urlWidth : ''">
    </div>
  </div>
  <div v-else class="stepBlock-reverse">
    <div class="step__left">
      <img :src="options.imgUrl" :style="options.urlWidth ? options.urlWidth : ''" alt="">
    </div>
    <div class="step__right">
      <h3 class="step__right--title">{{options.title}}</h3>
      <p class="step__right--desc">{{options.desc1}}</p>
      <p class="step__right--desc">{{options.desc2}}</p>
      <p v-if="options.desc3" class="step__left--desc">{{options.desc3}}</p>
    </div>
  </div>
</template>
<script>
	export default {
		data() {
			return {
        styleObj: {
          borderTopWidth: '10px'
        }
			}
		},
		props: {
      options: [Object, Array],
    }
	}
</script>
<style lang="scss" scoped>
  .stepBlock {
    display: flex;
    height: 125px;
    overflow: hidden;
    border-bottom: 1px solid #e2e2e2;
    .step__left {
      flex: 1;
      color:#333;
      border-top: 20px solid #fff;
      border-left: 20px solid #fff;
      z-index: 1;
      .step__left--title {
        font-size: 22px;
        font-weight: bold;
      }
      .step__left--desc {
        font-size: 14px;
        line-height: 22px;
        margin: 0;
      }
    }
    .step__right {
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      display: flex;
      position: relative;
      img {
        width: 50%;
        margin-right: 49px;
        // height: 100%;
        // object-fit: content;
      }
    }

  }
  .stepBlock-reverse {
    display: flex;
    height: 125px;
    overflow: hidden;
    border-bottom: 1px solid #e2e2e2;
    .step__right {
      flex: 1;
      color:#333;
      border-top: 20px solid #fff;
      border-right: 20px solid #fff;
      text-align: right;
      .step__right--title {
        font-size: 22px;
        font-weight: bold;
      }
      .step__right--desc {
        font-size: 14px;
        line-height: 22px;
        margin: 0;

      }
    }
    .step__left {
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      display: flex;
      position: relative;
      img {
        width: 50%;
        margin-right: 49px;
        // height: 100%;
        // object-fit: content;
      }
    }

  }
</style>
