/**
 * 使用场景  ￥898.00 （￥898字号要大些）(.00为保留的位数显示要小写)
 * 金钱裁剪
 * @param num
 * @param fixedNum
 * return {
 *   int: 898,  整数位
 *   poi: .23   小数位
 * }
 */
const splitIntAndPoint = (num, fixedNum) => {
  if (!fixedNum || Number(fixedNum) < 0) {
    fixedNum = 2; // 默认保留2位
  }
  let int = Number(num).toFixed(fixedNum).toString().split('.')[0];
  let poi = Number(num).toFixed(fixedNum).toString().split('.')[1];
  return {
    int: int,
    poi: '.' + poi
  }
}


/**
 * 人民币过大用逗号隔开899,100,100
 * @param val
 * @returns {string}
 * // demo
 * addCommas(8999999.99)
 "8,999,999.99"
 */
const addCommas = (val) => {
  let aIntNum = val.toString().split('.');
  // 整数部分
  let iIntPart = aIntNum[0];
  // 小数部分（传的值有小数情况之下）
  let iFlootPart = aIntNum.length > 1 ? '.' + aIntNum[1] : '';
  let rgx = /(\d+)(\d{3})/;
  // 如果整数部分位数大于或等于5
  if (iIntPart.length >= 5) {
    // 根据正则要求，将整数部分用逗号每三位分隔
    while (rgx.test(iIntPart)) {
      iIntPart = iIntPart.replace(rgx, '$1' + ',' + '$2');
    }
  }
  return iIntPart + iFlootPart;
}

/**
 * 获取URL中某个字符串字段
 * @param name
 * @param url
 * @returns {*}
 */
// gup('id', 'https://www.lubanso.com/wx/home/?id=bHViYW5zb7W7DJI=&jhkfdhkjfda')
// bHViYW5zb7W7DJI=
const gup = (name, url) => {
  if (!url) url = location.href;
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? null : results[1];
}
