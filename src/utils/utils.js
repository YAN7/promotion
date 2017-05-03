export {
  getCookie
}

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return decodeURIComponent(arr[2]);
  else
    return null;
}
