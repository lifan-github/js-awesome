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

// 1、动态正则：保留小数位
var bool = new RegExp("^\\d*(\\.\\d{0,"+n+"})?$").test(12.0);
console.log(bool, '3'); // true

var bool = new RegExp("^\\d*(\\.\\d{0,"+n+"})?$").test('12.567');
console.log(bool, '4'); // true

var bool = new RegExp("^\\d*(\\.\\d{0,"+n+"})?$").test('kjjkj');
console.log(bool, '5'); // false

// 2、定义只能保留2位小数
var r = /^\d+(\.\d{0,2})?$/.test('12')  // true
console.log(r);

var r1 = /^\d+(\.\d{0,2})?$/.test('12.12')  // true
console.log(r1);

var r2 = /^\d+(\.\d{0,2})?$/.test('1a.12')  // false
console.log(r2);

var r3 =  /^\d+(\.\d{0,2})?$/.test('12.123')  // false
console.log(r3);



// 合并price相同的，volume值相加合并
var arr = [{price: '1000', volume: '0.123'}, {price: '1002', volume: '0.113'},{price: '1003', volume: '0.723'},{price: '1002', volume: '0.23'}];
function delSameObjValue (arr, keyName, keyValue){
    let baseArr = [], newArr = [];
    for (let key in arr) {
        if (baseArr.includes(arr[key][keyName])) {
            newArr[baseArr.indexOf(arr[key][keyName])][keyValue] = +newArr[baseArr.indexOf(arr[key][keyName])][keyValue] + Number(arr[key][keyValue]);
        } else {
            baseArr.push(arr[key][keyName]);
            newArr.push(arr[key]);
        }
    }
    return newArr;
 }

 console.log(delSameObjValue(arr, 'price', 'volume'));