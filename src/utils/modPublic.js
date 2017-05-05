import * as HttpRequest from "../utils/httpRequest"
import * as Storage from "../utils/storage"

export {
  getImgCode,
  sendCode,
  getUid,
  getToken
}

function getUid() {
  var uid = null;
  if (Storage.get('yml_user_info')) {
    uid = Storage.get('yml_user_info').uid || null;
  }
  return uid;
}

function getToken() {
  var token = null;
  if (Storage.get('yml_user_info')) {
    token = Storage.get('yml_user_info').token || null;
  }
  return token;
}

// 发送验证码
function sendCode(phone, task, onSuccess, onFailed) {
  var url = 'client/?method=user.sendSmsCode';
  var params = {
    phone: phone,
    // vcode: imgCode,
    task: task
  };
  if (task == 'reg') {
    HttpRequest.post(url, params, onSuccess, onFailed);
  } else {
    HttpRequest.postWithAuth(url, params, onSuccess, onFailed);
  }
}

// 获取图像验证码
function getImgCode(onSuccess, onFailed) {
  var apiPath = 'client/?method=other.vcode';
  // var params = HttpRequest.getDefaultParams();
  var imgCodeSrc = HttpRequest.getBaseApiUrl() + apiPath;
  if (typeof onSuccess === 'function') onSuccess(imgCodeSrc);
}
