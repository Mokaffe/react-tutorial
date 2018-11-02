function a(num, callback) {
    num = num || 6;
    callback = callback || function (data) { console.log('ES5:', data) };
    callback(num * num);
}

a() //ES5: 36

a(10, function (data) {
    console.log(data * 10);  //1000, 传参输出新数值
})


function b(num = 6, callback = function (data) { console.log('ES6:', data) }) {
    callback(num * num);
}

b() //ES6: 36
b(10, function (data) { console.log(data * 10) });


