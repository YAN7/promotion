<template lang="html">
  <div class="page">
    <div class="page-content register">
      <div class="register--head">
        <img src="./../../static/img/personal.png" alt="">
        <p>推荐人： {{promoter_name}}</p>
      </div>
      <div class="register--input">
        <div class="input__item">
          <div class="item-img">
            <img src="./../../static/img/user.png" alt="">
          </div>
          <div class="item-text">
            <input type="text" v-model="phone" placeholder="请输入手机号">
          </div>
        </div>
      </div>
      <div class="register--input">
        <div class="input__item">
          <div class="item-img">
            <img src="./../../static/img/yzm.png" alt="">
          </div>
          <div class="item-text">
            <input type="text" v-model="code"  placeholder="请输入验证码">
          </div>
        </div>
        <md-button @click.native="sendPhoneCode" :disabled="valiDataForm(phone) || (timeCount != 0)" class="input__btn button button-small">
          {{timeCount == 0 ? '获取验证码' : timeCount + 's'}}
        </md-button>
      </div>
      <div class="register--input">
        <div class="input__item">
          <div class="item-img">
            <img src="./../../static/img/mima.png" alt="">
          </div>
          <div class="item-text">
            <input type="text" v-model="password"  placeholder="请输入密码">
          </div>
        </div>
      </div>
      <div class="register--submit">
      <md-button class="button button-block submit__btn" :disabled="valiDataForm(code, phone, password)" @click.native="submitRegister">注册</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { sendCode } from './../utils/modPublic';
import { post } from './../utils/httpRequest';
import { valiDataForm } from './../utils/utils';
export default {
  data() {
    return {
      code: '',
      phone: '',
      password: '',
      taskId: '',
      timeCount: 0,
      promoter_name: this.$route.query.promoter_name || '医美莱',
      promoter_id: this.$route.query.promoter_id || '',
      valiDataForm: valiDataForm,
    }
  },
  mounted() {
    this.WxSdk.init();
  },
  methods: {
    // 发送验证码
    sendPhoneCode() {
      if (this.phone == '') {
        $toast.show("请先输入手机号码", 1000);
        return;
      }
      sendCode(this.phone, 'reg', (re)=> {
        if (re.state == 1) {
          $toast.show("发送成功", 500);
          this.taskId = re.data.task_id;
          this.timeCount = 60;
          var timer = setInterval(()=> {
            if (this.timeCount > 0) {
              this.timeCount--;
            } else {
              clearInterval(timer);
            }
          } ,1000)
        } else {
          $toast.show(re.msg, 1000);
        }
      })
    },
    // 提交注册医美莱
    submitRegister() {
      const params = {
        code: this.code,
        phone: this.phone,
        task_id: this.taskId,
        password: this.password,
        promoter_id: this.promoter_id,
      }
      // console.log(params);
      post('client/?method=user.reg', params,(re)=> {
        if (re.state) {
          setTimeout(()=> {
            $toast.show("注册成功!", 500);
          }, 500)
          location.href = 'https://preview.yml360.com/wechat/share/share.html';
        } else {
          $toast.show(re.msg, 500);
        }
      }, (re)=> {$toast.show(re.msg), 500})
    }
  }
}
</script>

<style lang="scss">
  .register {
    background-color: #fff !important;
    .register--head {
      height: 110px;
      text-align: center;
      img {
        margin-top: 15px;
      }
      p {
        margin-top: 10px;
        color: #333;
        font-size: 16px;
      }
    }
    .register--input {
      margin: 12px 12px 0;
      display: flex;
      display: -webkit-flex;
      .input__item {
        border: 1px solid #eee;
        width: 100%;
        height: 50px;
        border-radius: 4px;
        display: flex;
        display: -webkit-flex;
        padding: 5px;
        .item-img {
          width: 50px;
          position: relative;
          display: flex;
          display: -webkit-flex;
          justify-content: center;
          align-items: cneter;
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 1px;
            height: 30px;
            background-color: #eee;
          }
          img {
            width: 50%;
            object-fit: contain;
          }
        }
        .item-text {
          flex: 1;
          -webkit-flex: 1;
          -webkit-box-flex: 1;
          input {
            // background-color: red;
            outline: none;
            width: 100%;
            height: 100%;
            padding: 0;
            padding-left: 10px;
            font-size: 15px;
            // line-height: normal;
          }
        }
      }
      .input__btn {
        background-color: #ff365d;
        color: #fff;
        line-height: 44px;
        width: 120px;
        margin-left: 10px;
        padding: 0 5px;
        font-size: 14px;
        height: 45px;
        margin: auto;
        margin-left: 10px;
      }
    }
    .register--submit {
      margin-top: 34px;
      padding: 0 12px;
      .submit__btn {
        color: #fff;
        font-size: 16px;
        background-color: #ff365d;
      }
    }
  }
</style>
