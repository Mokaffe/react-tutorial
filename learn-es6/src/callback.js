

const service = () => {
    console.log('功能逻辑...');
}

// const test = () => {
//     var time_start;
//     return {
//         before: () => {
//             time_start = (+new Date());
//             console.log('计时开始...');
//         },
//         after: () => {
//             var end= (+ new Date()) - time_start;
//             console.log('计时结束，用时：' + end);
//         }
//     }
// };

var test = (function(){
    var time_start;
    return {
        before: function(){
            time_start = (+new Date());
            console.log('计时开始...');
        },
        after: function(){
            var end = (+new Date()) - time_start;
            console.log('计时结束，用时：' + end);
        }
    }
    })();

const aop = (fn, proxy) => {
    proxy.before && proxy.before();
    fn();
    proxy.after && proxy.after();
}

aop(service, test);