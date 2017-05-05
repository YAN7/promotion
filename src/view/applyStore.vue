<template lang="html">
  <div class="page applyStore" >
    <div class="page-content">
      <div v-if="!hasApply && hasData">
        <list style="margin-top: 12px;">
          <item>*个人信息（请如实填写以下信息）</item>
          <div class="von-input-wrapper"><label class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">用户名：</span> <input v-model="apply_name" type="text" placeholder="请输入您的姓名"> <!----> <!----> <!----> <div class="hairline-bottom"></div></label> <span class="input-clear"></span></div>
          <div class="von-input-wrapper"><label class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">联系电话：</span> <input v-model="apply_phone" type="text" placeholder="请保持通讯畅通"> <!----> <!----> <!----> <div class="hairline-bottom"></div></label> <span class="input-clear"></span></div>
          <div class="von-input-wrapper"><label class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">微信号：</span> <input v-model="apply_wx_account" type="text" placeholder="请输入您的微信号"> <!----> <!----> <!----> <div class="hairline-bottom"></div></label> <span class="input-clear"></span></div>
        </list>
        <list style="margin-top: 12px;">
          <item>*店铺信息（请如实填写以下信息）</item>
          <div class="von-input-wrapper"><label class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">店铺名称：</span> <input v-model="store_name" type="text" placeholder="请输入您的店铺名称"> <!----> <!----> <!----> <div class="hairline-bottom"></div></label> <span class="input-clear"></span></div>
          <div class="von-input-wrapper"><label @click.prevent="citySelect = true" class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">所在地区：</span> <div>{{district}}</div><div class="hairline-bottom"></div></label></div>
          <div class="von-input-wrapper"><label class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">详细地址：</span> <input v-model="address" type="text" placeholder="精确到门牌号"> <!----> <!----> <!----> <div class="hairline-bottom"></div></label> <span class="input-clear"></span></div>
          <div class="von-input-wrapper"><label @click.prevent="chooseStoreType"  class="item item-borderless item-input von-input"><div class="hairline-top"></div> <span class="input-label">机构性质：</span> <div>{{credentials}}</div><div class="hairline-bottom"></div></label></div>
        </list>
        <md-button class="button md-button button-block applyStore--submitBtn" :disabled="valiDataForm(apply_name,apply_phone,apply_wx_account,district,store_name,credentials,address)" @click.native="submitStore">提 交</md-button>
        <!-- 地址选择框 -->
        <citySelect v-show="citySelect" @click.native="citySelect = false" chooseCity="this.console.log(123)"></citySelect>
      </div>
      <div v-if="hasApply && hasData" class="hasApplyModel">
        <storeApplyProgress :options="applyInfo"></storeApplyProgress>
      </div>
      <!-- 申请进度 -->
    </div>
  </div>
</template>

<script>
import { get,remove } from './../utils/storage';
import citySelect from './../components/selectCity';
import storeApplyProgress from './../components/storeApplyProgress';
import postWithAuth from './../utils/httpRequest';
import { valiDataForm, isEmptyObject } from "./../utils/utils";
export default {
  data() {
    return {
      apply_name: '',
      apply_phone: '',
      wechat: '',
      apply_wx_account: '',
      district: get('district') || '',
      store_name: '',
      credentials: '',
      credentialsNum: 0,
      citySelect: false,
      area: '',  // 省市区
      address: '',
      valiDataForm: valiDataForm,
      test: '',
      hasApply: false,
      hasData: false,
      applyInfo: {},
    }
  },
  components: { citySelect, storeApplyProgress },
  mounted() {
    this.WxSdk.init();
    this.checkProgress();
    remove('district');
  },
  beforeUpdate() {
    this.district = get('district') || '';
  },
  beforeDestroy() {
    remove('district');
  },
  methods: {
    // 选择机构性质
    chooseStoreType() {
      $actionSheet.show({
        theme: 'ios',
        title: "选择机构性质",
        buttons: {
          '美容院': ()=> {
            this.credentials = '美容院';
            this.credentialsNum = 1;
          },
          '医院': ()=> {
            this.credentials = '医院';
            this.credentialsNum = 2;
          },
          '门诊': ()=> {
            this.credentials = '门诊';
            this.credentialsNum = 3;
          },
          '诊所': ()=> {
            this.credentials = '诊所';
            this.credentialsNum = 4;
          },
          '工作室': ()=> {
            this.credentials = '工作室';
            this.credentialsNum = 5;
          }
        }
      })
    },
    // 提交注册
    submitStore() {
      const params = {
        apply_name: this.apply_name,
        apply_phone: this.apply_phone,
        apply_wx_account: this.apply_wx_account,
        store_name: this.store_name,
        province: this.district.split(",")[0] || '',
        city: this.district.split(",")[1] || '',
        district: this.district.split(",")[2] || '',
        address: this.address,
        credentials: this.credentialsNum,
      }
      console.log(params);
      postWithAuth('/promote/?method=apply.store', params, (re)=> {
        if(re.state) {
          $toast.show('提交成功', 1000);
          this.checkProgress();
        } else {
          $toast.show(re.msg, 1000);
        }
      }, (re)=> { $toast.show(re.msg, 1000) })
    },
    // 查询开店进度
    checkProgress() {
      postWithAuth('/promote/?method=apply.storeApplyInfo', {}, (re)=> {
        if (re.state) {
          // this.hasApply =
          if (re.data.ct) {
            this.hasApply = true;
            this.applyInfo =re.data;
          };
        }
        this.hasData = true;
      }, (re)=> {this.hasData = true})
    }
  },
}
</script>

<style lang="scss">
  .input-label {
    width: 28%;
    text-align: right;
  }
  .applyStore {
    .applyStore--submitBtn {
      background-color: #ff365d;
      color: #fff;
      font-size: 16px;
      margin-left: 12px;
      margin-right: 12px;
    }
    .applyStore--item {
      position: absolute;
      left: 123px;
      top: 50%;
      transform: translateY(-50%);
      color: #333;
    }
  }
  .hasApplyModel {
    margin-top: 20px;
  }
</style>
