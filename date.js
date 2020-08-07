/***
日期格式化
format(new Date(), 'yyyy/mm/dd hh:ii:ss')
format(new Date(), 'yyyy-mm-dd hh:ii:ss')
format(new Date(), 'yyyy/mm/dd')
format(new Date(), 'yyyy/mm/dd hh:ii')
**/
function format(d, f) {
			var o = {
				"m+": d.getMonth() + 1,
				"d+": d.getDate(),
				"h+": d.getHours(),
				"i+": d.getMinutes(),
				"s+": d.getSeconds(),
				"q+": Math.floor((d.getMonth() + 3) / 3),
			};
			if (/(y+)/.test(f))
				f = f.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)
				if (new RegExp("(" + k + ")").test(f))
					f = f.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return f;
}
