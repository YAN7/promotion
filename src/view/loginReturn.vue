<template>

</template>
<script>
  import * as Utils from './../utils/utils'
  import * as Storage from './../utils/storage'

  export default {
    components: {},
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    },
    created() {
      let storageUserInfo = function () {
        var userInfo = {};
        userInfo.token = Utils.getCookie('token') || '';
        userInfo.nickname = Utils.getCookie('nickname') || '';
        userInfo.user_img = Utils.getCookie('user_img') || '';
        userInfo.promoter_id = Utils.getCookie('promoter_id') || '';
        userInfo.promoter_type = Utils.getCookie('promoter_type') || '';
        Storage.set('yml_user_info', userInfo);
      };
      storageUserInfo();
      // this.$router.replace('personal');
      // if (isReg == 1) {
      //   var returnUrl = Storage.get('yml_returnUrl') || "#/my";
      //   var token = Utils.getCookie('token');
      //   Storage.set('yml_token', token);
      //   Storage.remove('yml_returnUrl');
      //   storageUserInfo();
      //    if (typeof returnUrl != 'undefined') {
      //      location.href = returnUrl;
      //    } else {
      //      this.$router.push('my');
      //    }
      // } else {
      //   this.$router.push('beforeBindAccount');
      // }
    }
  }
</script>
