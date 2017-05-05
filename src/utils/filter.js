export {
  getFormatData,
  orderState,
  refundState,
  transformTime,
  transformAge,
  transformDay,
  msgType,
  applyStatus,
  ArrWithNoRepeat,
}

// 时间戳转换成格式化时间
function getFormatData(timeStamp, noHour) {
  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }
  let d = new Date(timeStamp);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let hour = addZero(d.getHours());
  let minute = addZero(d.getMinutes());
  let second = addZero(d.getSeconds());
  return noHour ? `${year}-${month}-${date}` : `${year}-${month}-${date} ${hour}:${minute}:${second}`;
}


// 订单状态
function orderState (state) {
  switch(Number(state)) {
    case 1:
      return "待付款";
    case 2:
      return "待派单";
    case 3:
      return "待服务";
    case 4:
      return "服务中";
    case 5:
      return "待评价";
    case 6:
      return "交易成功";
    case 7:
      return "已取消";
    case 8:
      return "已取消";
  }
}

// 退款状态
function refundState (state) {
  switch(Number(state)) {
    case 1:
      return "秒退成功";
    case 2:
      return "退款审核中";
    case 3:
      return "撤销退款";
    case 4:
      return "退款审核中"; // 商家拒绝退款（等待平台确认）
    case 5:
      return "退款审核中"; // 商家同意退款（等待平台确认）
    case 6:
      return "退款失败";
    case 7:
      return "退款成功";
    case 8:
      return "退款失败";
    case 9:
      return "退款成功";
  }
}

// 退款状态
function refundState1 (state) {
  switch(Number(state)) {
    case 1:
      return "秒退成功";
    case 2:
      return "待审核";
    case 3:
      return "撤销退款";
    case 4:
      return "退款审核中"; // 商家拒绝退款（等待平台确认）
    case 5:
      return "退款审核中"; // 商家同意退款（等待平台确认）
    case 6:
      return "平台拒绝退款";
    case 7:
      return "退款成功";
    case 8:
      return "平台拒绝退款";
    case 9:
      return "退款成功";
  }
}
// 将时间转化为同现在比相差的时间
function transformTime(time){
  var hour = parseFloat( (Date.parse(new Date()) - new Date(parseInt(time*1000)))/3600000 );
  var text  = ''
  if(hour>23&&hour<24*30){
    text = parseInt(hour/24)+'天前'
  }else if(hour>24*30){
    text = parseInt(hour/24/30) + '个月前'
  }else if (hour > 1 && hour < 23){
    text = parseInt(hour)+'小时前'
  } else if (hour < 1 && hour > 0.016) {
    text = parseInt(hour * 60)+'分钟前'
  } else {
    text = '刚刚';
  }

  return text;
}
// 是时间转化为天数
function transformDay(time){
  var day = parseInt( (Date.parse(new Date()) - new Date(parseInt(time*1000)))/3600000/24 );
  return day;
}
// 计算生日
function transformAge(birthTime){
  return new Date().getFullYear() - String(birthTime).split("-")[0]
}

// 社区消息类型
function msgType(type) {
  var text = '';
  switch(Number(type)) {
    case 1:
      text = 'ta点赞了你';
      break;
    case 2:
      text = 'ta评论了你';
      break;
    case 3:
      text = 'ta关注了你';
      break;
  }
  return text;
}

// 申请医美店，医美师审核状态
function applyStatus(status) {
  var text = ''
  switch(Number(status)) {
    case 0:
      text =  "初审待审核";
      break;
    case 1:
      text =  "初审未通过";
      break;
    case 2:
      text =  "初审通过";
      break;
    case 3:
      text =  "信息登记";
      break;
    case 4:
      text =  "二审待审核";
      break;
    case 5:
      text =  "二审不通过";
      break;
    case 6:
      text =  "审核通过";
      break;
    case 7:
      text =  "修改资料待审核";
      break;
    case 8:
      text =  "三审待审核";
      break;
    case 9:
      text =  "复审不通过";
      break;
  }
}

// 数组去重
function ArrWithNoRepeat(arr) {
  var n = []; //一个新的临时数组
  //遍历当前数组
  for(var i = 0; i < arr.length; i++){
  //如果当前数组的第i已经保存进了临时数组，那么跳过，
  //否则把当前项push到临时数组里面
  if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
  }
  return n;

}



