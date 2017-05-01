<template>
  <div class="page has-navbar" v-nav="{ title: '分享赚钱' }">
    <div class="page-content homepage">
      <div style="position: relative;">
        <img src="./../../static/img/banner.png" style="width: 100%" alt="">
        <div class="ruleBtn--container"><ButtonD @click.native="$trouter.push("shareRule")"></ButtonD></div>
      </div>
      <!-- <router-link to="" class="button button-3d button-highlight button-pill homepage--ruleBtn">Visit Us!</router-link> -->
      <StepLeft :options="step1"></StepLeft>
      <StepLeft :options="step2"></StepLeft>
      <StepLeft :options="step3"></StepLeft>
      <StepLeft :options="step4"></StepLeft>
      <StepLeft :options="step5"></StepLeft>
      <router-link class="button button-positive button-block homepage--linkBtn" style="background-color: #ff365d; margin-left: 12px; margin-right: 12px;"  to="/personal">
        <label for="">个人推广: &yen;399.00</label>
      </router-link>
      <router-link class="button button-positive button-block homepage--linkBtn" style="background-color: #1b9cfd; margin-left: 12px; margin-right: 12px;" to="/inStore">
        <label for="">入驻医美店: &yen; 599.00</label>
      </router-link>
    </div>
  </div>
</template>
<script>
  import StepLeft from './../components/setpLeft.vue';
  import ButtonD from './../components/buttonD.vue';
  export default {
    components: {StepLeft,ButtonD},
    data () {
      return {
        step1: {
          title: "step1",
          desc1: "缴纳押金获取医美莱",
          desc2: "“分享赚钱”资格",
          imgUrl: "../../static/img/step1.png"
        },
        step2: {
          title: "step2",
          desc1: "分享医美莱注册链接",
          desc2: "给朋友",
          imgUrl: "../../static/img/step2.png"
        },
        step3: {
          title: "step3",
          desc1: "通过朋友分享给你的链接",
          desc2: "注册成功",
          imgUrl: "../../static/img/step3.png"
        },
        step4: {
          title: "step4",
          desc1: "朋友用该账号开始",
          desc2: "买买买",
          imgUrl: "../../static/img/step4.png"
        },
        step5: {
          title: "step5",
          desc1: "小伙伴订单服务完成后，",
          desc2: "您最高可获得订单实际",
          desc3: "金额10%的收益奖励",
          imgUrl: "../../static/img/step5.png"
        },
      }
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
      width: 140px;
      height:39px;
      text-align: center;
    }
  }
</style>
