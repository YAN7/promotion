<template>
  <div class="page has-navbar" v-nav="{ title: '分享赚钱' }">
    <div class="page-content homepage">
      <div style="position: relative;">
        <img src="./../../static/img/banner.png" style="width: 100%" alt="">
        <div class="ruleBtn--container"><ButtonD @click.native="$router.push('shareRule')"></ButtonD></div>
      </div>
      <StepLeft v-for="step in steps" :options="step"></StepLeft>
      <router-link class="button md-button button-positive button-block homepage--linkBtn" style="background-color: #ff365d; margin-left: 12px; margin-right: 12px;"  to="/personal">
        <label for="">个人推广: &yen;399.00</label>
      </router-link>
      <router-link class="button md-button button-positive button-block homepage--linkBtn" style="background-color: #1b9cfd; margin-left: 12px; margin-right: 12px;" to="/inStore">
        <label for="">入驻医美店: &yen; 599.00</label>
      </router-link>
    </div>
  </div>
</template>
<script>
  import StepLeft from './../components/stepBlock.vue';
  import ButtonD from './../components/buttonD.vue';
  export default {
    components: {StepLeft,ButtonD},
    data () {
      return {
        steps: [
          {
            title: "step1",
            desc1: "缴纳押金获取医美莱",
            desc2: "“分享赚钱”资格",
            imgUrl: "../../static/img/step1.png",
            direction: 'left',
          },
          {
            title: "step2",
            desc1: "分享医美莱注册链接",
            desc2: "给朋友",
            imgUrl: "../../static/img/step2.png",
            direction: 'right',
            urlWidth: {width: '70%', marginRight: "28px",}
          },
          {
            title: "step3",
            desc1: "通过朋友分享给你的链接",
            desc2: "注册成功",
            imgUrl: "../../static/img/step3.png",
            direction: 'left',
          },
          {
            title: "step4",
            desc1: "朋友用该账号开始",
            desc2: "买买买",
            imgUrl: "../../static/img/step4.png",
            direction: 'right',
            urlWidth: {width: "55%"}
          },
          {
            title: "step5",
            desc1: "待朋友的订单服务完成后，",
            desc2: "您最高可获得订单实际支付",
            desc3: "金额10%的收益奖励",
            imgUrl: "../../static/img/step5.png",
            direction: 'left',
            urlWidth: {width: '180%', position: 'absolute', bottom: "0", right: '-33px'}
          },
        ]
      }
    },
    methods: {
      //
    }
  }
</script>
<style lang="scss">
  .homepage {
    background-color: #fff !important;
    position: relative;
    .homepage--linkBtn {
      label {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .ruleBtn--container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      text-align: center;
    }
  }
</style>
