import axios from 'axios';
import { md5 } from './md5';
// axios默认设置
axios.defaults.timeout = 3000;
axios.defaults.baseURL = 'https://preview.yml360.com/client/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default function wxLogin() {
  // axios.post('https://preview.yml360.com/client/promote/?ct=wechat&ac=redirectToAuth&url=?', {}, (re)=> {
  //   console.log(re);
  // })
  const url = encodeURIComponent('https://m.yml360.com/wechat/promotion/#/loginReturn')
  location.href="https://m.yml360.com/promote/?ct=wechat&ac=redirectToAuth&url="+url;
}
