// 一些常用的工具方法

// 获取url上的参数,需要传递相应的key和url
export function getUrlParams(name: string, url: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = url.slice(url.indexOf('?')).substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}


//时间戳转时间  
//num===0 => YYYY-MM-DD  num！==0 => YYYY-MM-DD hh:mm:ss
export function timestampToTime(timestamp, num = 0) {
  timestamp = timestamp + "";
  timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
  let date = new Date(timestamp);
  let y = date.getFullYear();
  let m = prefixInteger(date.getMonth() + 1, 2);
  let d = prefixInteger(date.getDate(), 2);
  let h = prefixInteger(date.getHours(), 2);
  let minute = prefixInteger(date.getMinutes(), 2);
  let second = prefixInteger(date.getSeconds(), 2);
  if (num == 0) {
    return y + "-" + m + "-" + d;
  } else {
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  }
}

// length不足补0
function prefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}
