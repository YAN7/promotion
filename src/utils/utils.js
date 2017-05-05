export {
  getCookie,
  valiDataForm
}
// 获得cookie
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return decodeURIComponent(arr[2]);
  else
    return null;
}
//表单验证 资料填写完整才高亮按钮
function valiDataForm(){
    for(var i =0;i<arguments.length;i++){
        if(!arguments[i]) return true;
    }
    return false;
}
//判断对象是否为空
function isEmptyObject(obj) {
  for (var t in obj) {
    if (obj.hasOwnProperty(t)) {
      return !1;
    }
  }
  return !0
}
