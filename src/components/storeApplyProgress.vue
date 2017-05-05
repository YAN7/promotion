<template lang="html">
  <div>
    <div class="custom-container pink">
      <div class="circle">
        <div class="small-circle" >
        </div>
      </div>
      <p class="f-rem-30" >提交申请</p>
      <p class="color-999 f-rem-26 mg-t-5">{{options.ct * 1000 | date}}</p>
    </div>
    <div class="custom-container" :class="options.status >= 1   ? 'pink' : ''">
      <div class="circle">
        <div class="small-circle" >
        </div>
      </div>
      <p class="f-rem-30" >首次审核</p>
      <p class="color-999 f-rem-26 mg-t-5">{{options.status >= 2 ? '预计三个工作日' : (options.status == 1 ? '初审未通过' : '')}}</p>
    </div>
    <div class="custom-container" :class="options.status >= 3 ? 'pink' : ''">
      <div class="circle">
        <div class="small-circle" >
        </div>
      </div>
      <p class="f-rem-30" >信息登记</p>
      <p class="color-999 f-rem-26 mg-t-5">{{options.status == 2 ? '请于三天内完成信息登记' : (options.status >= 3 ? '信息登记完成' : '')}}</p>
    </div>
    <div class="custom-container" :class="options.status >= 4 ? 'pink' : ''">
      <div class="circle">
        <div class="small-circle" >
        </div>
      </div>
      <p class="f-rem-30" >二次审核</p>
      <p v-if="options.status == 3" class="color-999 f-rem-26 mg-t-5">等待审核</p>
      <p v-if="options.status > 1" class="color-999 f-rem-26 mg-t-5">{{tipsMsg}}</p>
    </div>
    <div class="custom-container" style="border-left-color: transparent;" :class="options.status == 6 ? 'pink' : ''">
      <div class="circle">
        <div class="small-circle" >
        </div>
      </div>
      <p class="f-rem-30" >完成申请</p>
    </div>

    <div class="tipsModel">
      <p v-if='options.status == 0'>您已成功提交审核资料，我们将在3个工作日内为您审核，请耐心等待！</p>
      <p v-if='options.status == 1'>抱歉您提交的信息未通过初次审核，请重新提交资料。具体审核不通过原因如下：</p>
      <p v-if='options.status == 2'>恭喜您已顺利通过初次审核，请用电脑打开医美莱商户后台，继续申请流程，感谢您的合作。</p>
      <p v-if='options.status == 3'>您已成功提交审核资料，我们将在3个工作日内为您审核，请耐心等待！</p>
      <p v-if='options.status == 4'>您已成功提交二次审核资料，我们将在3个工作日内为您审核，请耐心等待！</p>
      <p v-if='options.status == 5'>抱歉您提交的信息未通过二次审核，请登录商户后台重新提交资料。</p>
      <p v-if='options.status == 6'>恭喜您已成功完成入驻医美店申请！</p>
      <p v-if='options.status == 7'>您已成功修改二次审核资料，我们将在3个工作日内为您审核，请耐心等待！</p>
      <p v-if='options.status == 8'>您已成功修改二次审核资料，我们将在3个工作日内为您审核，请耐心等待！</p>
      <p v-if='options.status == 9'>非常遗憾，您提交的资料审核不通过，请再次在后台重新填写资料</p>
      <div v-if="options.status >= 2">
        <p class="pd-gap mg-t-10">医美莱商户后台：{{options.login_url}}</p>
        <p class="pd-gap">登录账号：{{options.apply_phone}}</p>
        <p class="pd-gap">初识密码：{{options.login_password}}</p>
      </div>
      <p class="ui-center mg-t-20 color-999">此消息可在医美莱商户后台消息中心同步查看</p>
    </div>
  </div>
</template>

<script>

import {getFormatData} from './../utils/filter';
export default {
  data() {
    return {
      tipsMsg: '',
    }
  },
  props: {
    options: [Object, Array],
  },
  filters: {
    date: time =>getFormatData(time),
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style>
  .custom-container {
      margin-left: 69px;
      border-left : 4px solid #d6d6d6;
      padding-left: 2rem;
      padding-bottom: 1rem;
      position: relative;
      min-height: 70px;
  }
  .circle {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-12px, -10%);
      -webkit-transform: translate(-12px, -10%);
      width: 20px;
      height: 20px;
      background-color: #d6d6d6;
      border-radius: 50%;
      /*display: -webkit-box;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      -moz-justify-content: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -moz-align-items: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-box-align: center;*/
  }
  .small-circle {
      width: 10px;
      height: 10px;
      background-color: #b0b0b0;
      border-radius: 50%;
      color: #fff;
      font-size: 1.5rem;
      text-align: center;
      line-height: 1.85rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
  }
  .custom-container.pink {
    border-left : 4px solid #FFAEBE;
  }
  .custom-container.pink .circle {
    background-color: #FFAEBE;
  }
  .custom-container.pink .small-circle {
    background-color: #FF355D;
  }
  .tipsModel {
    padding: 12px;
    margin-top: 10px;
    font-size: 16px;
    color: #4a4a4a;
  }
</style>
