// filter/map/reduce
/*
 * 1.filter中的回调函数必须返回一个boolean值
 * 	true：函数内部会自动将这次回掉的n加入到新的数组中
 * 	false：函数内部会过滤调这次的n
 */
const nums = [10, 20, 111, 222, 333, 50, 40];
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
let total = nums.filter(function (n) {
	return n < 100
}).map(function (n) {
	return n * 2;
}).reduce(function (preValue, n) {
	return preValue + n;
}, 0);


let newNums = nums.filter(function (n) {
	return n < 100;
});
/*
 * 2.map函数
 */
let new2Nums = newNums.map(function (n) {
	return n * 2;
})

/*
 * 3.reduce函数
 * 	- 作用：对数组中所有的元素进行汇总
 */
let total = new2Nums.reduce(function (preValue, n) {
	return preValue + n;
}, 0)