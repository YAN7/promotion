<template>
  <div class="step-left">
    <div class="step__left">
      <h3 class="step__left--title">{{options.title}}</h3>
      <p class="step__left--desc">{{options.desc1}}</p>
      <p class="step__left--desc">{{options.desc2}}</p>
      <p v-if="options.desc3" class="step__left--desc">{{options.desc3}}</p>
    </div>
    <div class="step__right">
      <img :src="options.imgUrl" alt="">
    </div>
  </div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: ["options" ]
	}
</script>
<style lang="scss" scoped>
  .step-left {
    display: flex;
    height: 125px;
    overflow: hidden;
    border-bottom: 1px solid #e2e2e2;
    .step__left {
      flex: 1;
      color:#333;
      border-top: 20px solid #fff;
      border-left: 20px solid #fff;
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
      img {
        width: 50%;
        margin-right: 49px;
        // height: 100%;
        // object-fit: content;
      }
    }

  }
</style>