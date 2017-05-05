import Vue from 'vue'
import { md5 } from './md5'
import VueRouter from 'vue-router'
import * as Storage from './storage'
import VueResource from 'vue-resource'
export {
    getDefaultParams,
    getBaseApiUrl,
    getBaseWebappUrl,
    get,
    post,
    setToken,
    getToken,
    isLogin,
    removeToken,
    postWithAuth,
    postWithoutDefault
}
export default postWithAuth;
Vue.use(VueResource)

var token = encodeURIComponent("");

var sign, time;

function getToken() {
    if (!isStringNotEmpty(token)) {
        var _token = Storage.get("yml_token");
        if (_token) {
            token = _token;
        }
    }
    return token;
}


function isLogin() {
    return isStringNotEmpty(getToken());
}

function setToken(value) {
    var encodeId = encodeURIComponent(value);
    var tokenString = getToken();
    if (isStringNotEmpty(value) && (encodeId != tokenString)) {
        token = encodeId;
        Storage.set("yml_token", token);
    }
}

function removeToken() {
    token = '';
    Storage.set("token",'');
    Storage.remove('userInfo')
}

function getDefaultParams(postData) {
    postData = postData || {};
    // if(isLogin()) {
    //     postData.token = Storage.get("yml_token") || '';
    //     let userInfo = Storage.get("yml_user_info") || {}
    //     postData.uid = userInfo.uid || '';
    // }
    postData.time = +new Date();
    postData.app_key = appkey;
    if(postData.sign) delete postData.sign;
    let arr = [];
    for (let i in postData) {
        // arr.push(i + '=' + encodeURIComponent(postData[i]));  这个项目不需要转码
        arr.push(i + '=' + postData[i]);
    }
    arr.sort();
    let result = arr.join('&');
    postData.sign = md5(result);
    delete postData.app_key;
    return postData;
};

function isStringNotEmpty(string) {
    return isString(string) && (string.replace(/(^s*)|(s*$)/g, "").length > 0);
}

function isString(value) {
    return typeof value === 'string';
}

var appkey = "ebd696f30f9f53ea721ef714ab99b1ba";

function getBaseApiUrl() {
    return BaseApiUrl;
};
function getBaseWebappUrl() {
    // return 'http://tn.uxi.me/bull/dist/';
    return BaseApiUrl.replace('api.php','bull/dist/');
};

function get(extraUrl, extraParams, onSuccess, onFailed) {
    let url = getBaseApiUrl();
    if (extraUrl.indexOf("http") >= 0) {
        url = extraUrl;
    } else {
        if (isString(extraUrl)) {
            url += extraUrl;
        }
    }
    let params = getDefaultParams(extraParams);
    return requestBase('GET', url, {}, params, onSuccess, onFailed);
}

function post(extraUrl, data, onSuccess, onFailed) {
    var url = getBaseApiUrl();
    data._client = "web";
    if (extraUrl.indexOf("http") >= 0) {

        url = extraUrl;

    } else {
        if (isString(extraUrl)) {
            url += extraUrl;
        }
    }
    var params = getDefaultParams(data);
    return requestBase('POST', url, params, {}, onSuccess, onFailed);
}
function postWithoutDefault(extraUrl, data, onSuccess, onFailed){
    var url = getBaseApiUrl();
    // var auth = { _client: "web", };
    // Object.assign(data, auth);
    if (extraUrl.indexOf("http") >= 0) {

        url = extraUrl;

    } else {
        if (isString(extraUrl)) {
            url += extraUrl;
        }
    }
    return requestBase('POST', url, data, {}, onSuccess, onFailed);
}

function postWithAuth(extraUrl, data, onSuccess, onFailed) {
    var url = getBaseApiUrl();
    var yml_promoter_info = Storage.get("yml_promoter_info");
    if (yml_promoter_info) {
        var auth = {
            token: yml_promoter_info.token,
            promoter_id: yml_promoter_info.promoter_id,
        }
    }
    Object.assign(data, auth);
    if (extraUrl.indexOf("http") >= 0) {

        url = extraUrl;

    } else {
        if (isString(extraUrl)) {
            url += extraUrl;
        }
    }
    var params = getDefaultParams(data);
    return requestBase('POST', url, params, {}, onSuccess, onFailed);
}
function isWxEnable() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
}
function requestBase(type, url, data, params, onSuccess, onFailed) {
    let noop = function() {};
    // 给h5版加上_client这个字段以和app区别，拿到https下的图片
    let success = typeof onSuccess == 'function' ? onSuccess : noop;
    let fail = typeof onFailed == 'function' ? onFailed : noop;
    Vue.http.options.emulateJSON = true;
    // let head = header?header:"application/x-www-form-urlencoded;charset=UTF-8";
    // Indicator.open("加载中");
    // setTimeout(function(){
    //     Vue.prototype.$Progress.start();
    // },0);
    Vue.http({
            url: url,
            method: type,
            headers:{
                "Content-Type":'application/x-www-form-urlencoded;charset=UTF-8',
                // "Access-Control-Allow-Origin": '*',
            },
            body:data,
            params: Object.assign(params),
        })
        .then(function(Response) {
          // debugger;
          // console.log(Response.data);
          var data = typeof Response.data == "string" ? JSON.parse(Response.data) : Response.data;
          // var data = Response.data;
          var code;
          try {
              // code = JSON.parse(data).code;
              code = data.code;
          } catch (e) {

          }
          if (code == 308) {
            Storage.set("loginHash", location.hash);
            removeToken()
            // if(isWxEnable()) {
            //     location.href = getBaseWebappUrl()
            // } else {
            //     location.href = '#/login'
            // }
            // isWechat ? Toast('请登录') : '';
            // location.href = '#/login'
            const ua = window.navigator.userAgent.toLowerCase();
            const isWechat = ua.match(/MicroMessenger/i) == 'micromessenger';
            if (isWechat) {
              $toast.show("请先登录", 500);
              const url = encodeURIComponent('https://m.yml360.com/wechat/promotion/#/loginReturn')
              location.href="https://m.yml360.com/promote/?ct=wechat&ac=redirectToAuth&url="+url;
            }
            return;
          }
          success(data);
          // Vue.prototype.$Progress.finish();
        },function(){
            fail;
            // Vue.prototype.$Progress.fail();
        })
}
