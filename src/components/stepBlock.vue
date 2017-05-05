<template>
  <div class="stepBlock" v-if="options.direction == 'left'">
    <div class="step__left" :style="options.desc3 ? styleObj: ''">
      <h3 class="step__left--title">{{options.title}}</h3>
      <p class="step__left--desc" :style="options.desc3 ? pObj: ''">{{options.desc1}}</p>
      <p class="step__left--desc" :style="options.desc3 ? pObj: ''">{{options.desc2}}</p>
      <p v-if="options.desc3" class="step__left--desc" :style="options.desc3 ? pObj: ''">{{options.desc3}}</p>
    </div>
    <div class="step__right" :style="options.boxWidth ? options.boxWidth : ''">
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
          borderTopWidth: '10px',
        },
        pObj: {
          fontSize:'13px',
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
    display: -webkit-flex;
    height: 125px;
    overflow: hidden;
    border-bottom: 1px solid #e2e2e2;
    .step__left {
      flex: 1;
      -webkit-flex: 1;
      -webkit-box-flex: 1;
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
      // flex: 1;
      // -webkit-flex: 1;
      // -webkit-box-flex: 1;
      // align-items: center;
      // justify-content: flex-end;
      // display: flex;
      // -webkit-display: flex;
      // position: relative;
      // -webkit-justify-content:center;
      // justify-content:center;
      // -moz-box-pack:center;
      // -webkit--moz-box-pack:center;
      // box-pack:center;
      // align-items:center;
      // -webkit-align-items:center;
      // box-align:center;
      // -moz-box-align:center;
      // -webkit-box-align:center;
      width: 30%;
      // text-align: center;
      margin-top: 5px;
      margin-bottom: 5px;
      position: relative;
      img {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 33%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        // margin-right: 49px;
        // height: 100%;
        // object-fit: content;
      }
    }

  }
  .stepBlock-reverse {
    display: flex;
    display: -webkit-flex;
    height: 125px;
    overflow: hidden;
    border-bottom: 1px solid #e2e2e2;
    .step__right {
      flex: 1;
      -webkit-flex: 1;
      -webkit-box-flex: 1;
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
      // flex: 1;
      // -webkit-flex: 1;
      // -webkit-box-flex: 1;
      // align-items: center;
      // justify-content: flex-end;
      // display: flex;
      // display: -webkit-flex;
      // position: relative;
      width: 50%;
      position: relative;
      img {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        // height: 100%;
        // object-fit: content;
      }
    }

  }
</style>
