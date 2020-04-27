/**
 * react-native JSON数据找不到变量报错
 * 移动端开发找不到变量，会造成闪退的安全监测方法
 * @param target_obj      目标应用的对象
 * @param arr             目标层级查找
 * @param default_data    查找不到放回默认值
 * @returns {*}
 */

/**
 * 常见的出错bug造成闪退
 * const {userInfo} = this.props.Store;
    <View>
      <Text>{userInfo.data.name}</Text>
      // 报错name找不到
    </View>
 */

let obj = {data: {person: {name: 'lily', age: 30}}};
let arr = ["data", "person", "name"];
let default_data = 'N/A';
// ==== 以上如果查找不到第三级的(后台返回的字段如果没有的，就会闪退)name值

const checkObjName = (target_obj, arr, default_data) => {
  let target = target_obj;
  for (let i = 0; i < arr.length; i++) {
    if (!target.hasOwnProperty(arr[i])) {
      return default_data;
    }
    target = target[arr[i]]
  }
  return target;
}
