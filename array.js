/**
 * 数组按位数进行切割
 * @param arr 原始数组
 * @param num 切割位
 * @returns {[]} return [[1,2,3],[1,2,3]...]
 */
const sliceNumArr = (arr, num) => {
  let allArr = [];
  let currArr = [];
  for (let i = 0; i < arr.length; i++) {
    currArr.push(arr[i]);
    //在这里求num的余数,如果i不等于0,且可以整除 或者考虑到不满num个或等于num个的情况就要加上  i等于当前数组长度-1的时候
    if ((i !== 0 && (i + 1) % num === 0) || i === arr.length - 1) {
      allArr.push(currArr);
      //在这里清空currArr
      currArr = [];
    }
  }
  return allArr;
}
