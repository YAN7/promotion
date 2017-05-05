import * as httpRequest from './httpRequest'
import Vue from 'vue'
export {
  login,
  sendSmsCode,
  postNoParams,
  reg,
  lucky,
  myRecord,
  recharge,
  goodsList,
  getBaseApiUrl,
  exchange,
  exchangeList,
  getWechatConfig,
  wxLogin,
  wecutLogin,
  dataReport,
  christmasPay,
  payState,
  userFriends,
  modifyInfo,
  useSkin,
  getMsgActivity, // 获取活动消息
  getOrderList,   // 获取订单列表
  getOrderDetail,   // 获取订单详情
  cancelOrder,   // 取消订单
  walletBalance,  // 钱包余额
  payOrder,  // 支付订单
  previewOrder,  // 预览订单
  confirmOrder,  // 确认下单
  AddressList,  // 地址列表
  delOrder,  // 删除订单
}

function AddressList(onSuccess, onFailed) {
  var url = "?method=project.address";
  var params = {}
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function confirmOrder (params, onSuccess, onFailed) {
  var url = "?mehtod=project.makeOrder";
  var params = {
    ...params,
  }
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function previewOrder(saleId, attrId, onSuccess, onFailed) {
  var url = "?method=project.previewOrder";
  var params = {
    saleId,
    attrId
  }
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function payOrder(orderId, couponId, onSuccess, onFailed) {
  var url = "?method=project.payOrder";
  var params = {
    orderId,
    couponId
  }
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function walletBalance(onSuccess, onFailed) {
  var url = "?method=balance.userBalance";
  var params = {};
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function cancelOrder(orderId, onSuccess, onFailed) {
  var url = "?method=project.commonOrderCancel";
  var params = {
    orderId,
  }
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

// function delOrder(order_id, onSuccess, onFailed) {
//   var url = "?method=project.delOrder";
//   var params = {
//     order_id,
//   }
//   return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
// }

function delOrder(orderId, onSuccess, onFailed) {
  var url = "/?method=project.commonOrderDelete";
  var params = {
    orderId,
  }
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function getOrderDetail(orderId, onSuccess, onFailed) {
  var url = "?method=project.commonOrderDetail";
  var params = {
    orderId,
  }
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function getMsgActivity(state, params, onSuccess, onFailed) {
  switch (Number(state)) {
    case 1:
      var url = '?method=msg.activity';  // 活动
      break;
    case 2:
      var url = '?method=msg.community'; // 论坛
      break;
    case 3:
      var url = '?method=msg.notify';    // 通知
      break;
  }
  var params = {
    ...params
  };
  return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function getOrderList(status, page, onSuccess, onFailed) {
    var url = '?method=project.commonOrderList';
    var params = {
        status, page
    }
    return httpRequest.postWithAuth(url, params, onSuccess, onFailed);
}

function useSkin(skin, onSuccess, onFailed) {
  var url = '?method=user.useSkin';
  var params = {
    skin: skin
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function modifyInfo(nick, icon, onSuccess, onFailed) {
  var url = '?method=user.modifyInfo';
  var params = {
    icon: icon,
    nick: nick
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function userFriends(type, id, onSuccess, onFailed) {
  var urls = {
    awardList: '?method=user.awardList',
    friendList: '?method=user.friendList'
  }
  var params = {
    id: id
  };
  return httpRequest.post(urls[type], params, onSuccess, onFailed);
}


function payState(order_num, onSuccess, onFailed) {
  var url = '?method=bull.payState';
  var params = {
    order_num: order_num
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function christmasPay(onSuccess, onFailed) {
  var url = '?method=user.christmasPay';
  var params = {};
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function dataReport(channel, onSuccess, onFailed) {
  var url = '?method=user.loginGame';
  var params = {
    game: 'taoniu',
    channel: channel
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function wecutLogin(wecut_uid, wecut_rand, wecut_token, onSuccess, onFailed) {
  var url = '?method=user.wecutLogin';
  var params = {
    wecut_uid: wecut_uid,
    wecut_rand: wecut_rand,
    wecut_token: wecut_token
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function wxLogin(token, onSuccess, onFailed) {
  var url = '?method=user.wxLogin';
  var params = {
    token: token
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function getWechatConfig(currentUrl, onSuccess, onFailed) {
  var url = '?method=user.weChatWebSign';
  var params = {
    url: currentUrl
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function exchangeList(type, page, onSuccess, onFailed) {
  var url = '?method=shop.exchangeList';
  var params = {
    type: type,
    page: page
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function exchange(goods_id, receiver, phone, address, onSuccess, onFailed) {
  var url = '?method=shop.exchange';
  var params = {
    goods_id: goods_id,
    receiver: receiver,
    phone: phone,
    address: address
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function goodsList(type, page, onSuccess, onFailed) {
  var url = '?method=shop.goodsList';
  var params = {
    type: type,
    page: page
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function recharge(money, pay_type, onSuccess, onFailed) {
  var url = '?method=bull.pay';
  var params = {
    pay_type: pay_type,
    money: money
  };
  return httpRequest.post(url, params, onSuccess, onFailed);
}

function myRecord(type, award, last_time, onSuccess, onFailed) {
  var urls = {
    myRecord: '?method=bull.myRecord',
    mySimRecord: '?method=bull.mySimRecord'
  }
  var params = {
    award: award,
    last_time: last_time
  };
  return httpRequest.post(urls[type], params, onSuccess, onFailed);
}

function lucky(type, level, coin, multiple, onSuccess, onFailed) {
  var urls = {
    lucky: '?method=bull.lucky',
    simLucky: '?method=bull.simLucky'
  }
  var params = {
    level: level,
    coin: coin,
    multiple: multiple
  };
  return httpRequest.post(urls[type], params, onSuccess, onFailed);
}

function postNoParams(type, onSuccess, onFail) {
  var urls = {
    myInfo: "?method=user.myInfo",
    goodsTypeList: "?method=shop.goodsType",
    congratulate: '?method=bull.congratulate',
    userInfo: '?method=user.info',
    friends: '?method=user.friends',
    sign: '?method=user.sign',
    allReceive: '?method=user.allReceive'
  };
  var params = {};
  return httpRequest.post(urls[type], params, onSuccess, onFail);
}


function reg(type, phone, password, code, task_id, channel, invite, onSuccess, onFailed) {
  var urls = {
    reg: '?method=user.reg',
    find_pwd: '?method=user.forgetPassword'
  };
  var params = {
    phone: phone,
    code: code,
    task_id: task_id,
    password: password,
    channel: channel,
    invite: invite
  };
  return httpRequest.post(urls[type], params, onSuccess, onFailed);
}



function getBaseApiUrl() {
  return httpRequest.getBaseApiUrl()
}





/**
 * 登录
 */
function login(phone, password, onSuccess, onFail) {
  var requestUrl = '?method=user.login';
  var params = {
    phone: 18565082419,　　// 18565082419 18718795708 18269241292
    password: 123456,
  };
  return httpRequest.post(requestUrl, params, onSuccess, onFail);
}

/**
 * 获取注册短信验证码
 *@param {String} code  表示图形验证码
 */
function sendSmsCode(task, phone, code, onSuccess, onFail) {
  var requestUrl = "?method=user.sendSmsCode";
  var params = {
    task: task,
    phone: phone,
    code: code
  };
  return httpRequest.post(requestUrl, params, onSuccess, onFail);
}


function getIndexBanner(params,onSuccess,onFail){
    var requestUrl = '?method=other.home';
    var params = {
        page:params.page,
        code:params.code,
        Ing:params.Ing,
        lat:params.lat
    };
    return httpRequest.post(requestUrl, params, onSuccess, onFail);
}
