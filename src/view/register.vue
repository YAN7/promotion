<template lang="html">
  <div class="page has-navbar" v-nav="{title: '注册医美莱', showBackButton: true}">
    <div class="page-content register">
      <div class="register--head">
        <img src="./../../static/img/personal.png" alt="">
        <p>推荐人： 啦啦啦</p>
      </div>
      <div class="register--input">
        <div class="input__item">
          <div class="item-img">
            <img src="./../../static/img/user.png" alt="">
          </div>
          <div class="item-text">
            <input type="text" placeholder="请输入手机号">
          </div>
        </div>
      </div>
      <div class="register--input">
        <div class="input__item">
          <div class="item-img">
            <img src="./../../static/img/yzm.png" alt="">
          </div>
          <div class="item-text">
            <input type="text" placeholder="请输入手机号">
          </div>
        </div>
        <div class="input__btn button button-small">
          获取验证码
        </div>
      </div>
      <div class="register--input">
        <div class="input__item">
          <div class="item-img">
            <img src="./../../static/img/mima.png" alt="">
          </div>
          <div class="item-text">
            <input type="text" placeholder="请输入手机号">
          </div>
        </div>
      </div>
      <div class="register--submit">
        <div class="button button-md button-block submit__btn">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      .input__item {
        border: 1px solid #eee;
        width: 100%;
        height: 50px;
        border-radius: 4px;
        display: flex;
        padding: 5px;
        .item-img {
          width: 50px;
          position: relative;
          display: flex;
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
          input {
            outline: none;
            width: 100%;
            height: 100%;
            padding-left: 10px;
            font-size: 15px;
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
