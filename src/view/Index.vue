<template>
<div class="page">
  <div class="page-content homepage">
    <div style="position: relative;">
      <img src="./../../static/img/banner.png" style="width: 100%" alt="">
      <div class="ruleBtn--container">
        <ButtonD @click.native="$router.push('shareRule')"></ButtonD>
      </div>
    </div>
    <StepLeft v-for="step in steps" :options="step"></StepLeft>
    <md-button class="button md-button button-positive button-block homepage--linkBtn" style="background-color: #ff365d; margin-left: 12px; margin-right: 12px;" @click.native="doCharge(1)">
      <label for="">个人推广: &yen;{{personalNum}}</label>
    </md-button>
    <md-button class="button md-button button-positive button-block homepage--linkBtn" style="background-color: #1b9cfd; margin-left: 12px; margin-right: 12px;" @click.native="doCharge(2)">
      <label for="">入驻医美店: &yen; {{storeNum}}</label>
    </md-button>
  </div>
</div>
</template>
<script>
import wxLogin from './../utils/https';
import { get } from './../utils/storage'
import { postWithAuth, post } from './../utils/httpRequest';
import ButtonD from './../components/buttonD.vue';
import StepLeft from './../components/stepBlock.vue';

export default {
  components: {
    StepLeft,
    ButtonD
  },
  data() {
    return {
      steps: [{
          title: "step1",
          desc1: "缴纳押金获取医美莱",
          desc2: "“分享赚钱”资格",
          imgUrl: "./static/img/step1.png",
          direction: 'left',
        },
        {
          title: "step2",
          desc1: "分享医美莱注册链接",
          desc2: "给朋友",
          imgUrl: "./static/img/step2.png",
          direction: 'right',
          urlWidth: {
            width: '70%',
            marginRight: "28px",
          }
        },
        {
          title: "step3",
          desc1: "通过朋友分享给你的链接",
          desc2: "注册成功",
          imgUrl: "./static/img/step3.png",
          direction: 'left',
        },
        {
          title: "step4",
          desc1: "朋友用该账号开始",
          desc2: "买买买",
          imgUrl: "./static/img/step4.png",
          direction: 'right',
          urlWidth: {
            width: "55%"
          }
        },
        {
          title: "step5",
          desc1: "待朋友完成订单服务，",
          desc2: "最高可获得订单实际支付",
          desc3: "金额10%的收益奖励",
          imgUrl: "./static/img/step5.png",
          direction: 'left',
          urlWidth: {
            width: '180%',
            bottom: "0",
            left: '15%',
            top: "58%",
          },
          boxWidth: {
            width: '48%',
          }
        },
      ],
      personalNum: '',
      storeNum: '',
      promoter_type: '',
    }
  },
  created() {
    console.log(1);
    // this.getPromoterInfo();
  },
  mounted() {
    // wxLogin();
    const ua = window.navigator.userAgent.toLowerCase();
    const isWechat = ua.match(/MicroMessenger/i) == 'micromessenger';
    this.WxSdk.init();
    if (!get("yml_promoter_info") && isWechat) {
      wxLogin();
    }
    this.getPromoterInfo();
    const yml_promoter_info = get("yml_promoter_info");
    // 获取押金金额
    post('promote/?method=promoter.distrDeposit', {}, (re)=> {
      if (re.state) {
        this.personalNum = re.data.normal;
        this.storeNum = re.data.store;
      } else {
        $toast.show(re.msg, 500)
      }
    }, (re)=> {$toast.show(re.msg, 500)})
  },
  methods: {
    // 获取推广员信息
    getPromoterInfo() {
      postWithAuth('promote/?method=promoter.selfinfo', {}, (re)=> {
        if (re.state) {
          this.promoter_type = re.data.promoter_type;
          if (this.promoter_type == 1) {
            this.$router.push("personal")
          } else if (this.promoter_type == 2) {
            this.$router.push("inStore")
          }
        } else {
          $toast.show(re.msg, 500)
        }
      }, (re)=> {$toast.show(re.msg, 500)})
    },
    // 充值
    doCharge(promoter_type) {
      if (this.promoter_type == 1 && promoter_type == 1) {
        this.$router.push('personal');
        return;
      } else if (this.promoter_type == 2 && promoter_type == 2) {
        this.$router.push('inStore');
        return;
      } else if (this.promoter_type == 1 && promoter_type == 2) {
        $toast.show('您已成为个人推广员,不能再申请店铺推广', 1000);
        return;
      } else if (this.promoter_type == 2 && promoter_type == 1) {
        $toast.show('您已成为店铺推广员,不能再申请店铺推广', 1000);
        return;
      }
      let _this = this;
      // this.$router.push('inStore');
      postWithAuth('promote/?method=promoter.applyPromoterAndPayOrder', {promoter_type: promoter_type}, function(re) {
        if (re.state) {
          var data = re.data;
          function onBridgeReady(data) {
            WeixinJSBridge.invoke(
              'getBrandWCPayRequest', {
                 "appId": data.appId, //公众号名称，由商户传入
                 "timeStamp": data.timeStamp, //时间\戳，自1970年以来的秒数
                 "nonceStr": data.nonceStr, //随机串
                 "package": data.package,
                 "signType": data.signType, //微信签名方式：
                 "paySign": data.paySign //微信签名
              },
              function(res) {
                // Toast({
                //   message: res,
                //   duration: 10000,
                // });
                // $toast.show(res, 1000000);
                const response = JSON.stringify(res);
                if (response.indexOf("ok") > -1) {
                  $toast.show('支付成功', 2000);
                  _this.getPromoterInfo();
                  if (_this.promoter_type == 1) {
                    _this.$router.push('personal');
                  } else {
                    _this.$router.push('inStore');
                  }
                } else {

                }
              }
            );
          }
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
          } else {
            onBridgeReady(data);
          }
        } else {
        }
      }, () => {})
    }
  },

}
</script>
<style lang="scss" scoped>
.homepage {
    background-color: #fff !important;
    // position: relative;
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
        -webkit-transform: translateX(-50%);
        // WebkitTransform: translateX(-50%);
        // margin-left: -50%;
        bottom: 20px;
        text-align: center;
    }
}
</style>
