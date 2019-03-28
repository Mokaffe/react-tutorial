// 拼接用户名，用户名是空格隔开，然后用 - 链接，所有的字符小写

// 普通的做法
// const toSlug = input => encodeURIComponent(
//     input.split(' ')
//       .map(str => str.toLowerCase())
//       .join('-')
//   );
//https://zcfy.cc/article/master-the-javascript-interview-what-is-function-composition-2160.html
//http://www.webhek.com/post/javascript-bind.html
// 可读性更高的写法 --> 函数组合
// 函数 f 和 g 的组合可以被定义为 f(g(x))，从内到外（从右到左）求值。
// 求值顺序： x, g , f
// const toSlug = input => encodeURIComponent(
//     join('-')(
//       map(toLowerCase)(
//         split(' ')(
//           input
//         )
//       )
//     )
//   );

//   console.log(toSlug('bao Huan HelOO'))

var value=2;
var foo = {
  value: 1
};

function bar (name, age) {
  return {
    value: this.value,
    name: name,
    age: age
  }
}

const a = bar.call(foo, "jack", 20);
console.log(a)

var bindFoo1 = bar.bind(foo, "Merry", 18);
console.log(bindFoo1);
reSelectProductIdList = bindFoo1();
console.log(b);
