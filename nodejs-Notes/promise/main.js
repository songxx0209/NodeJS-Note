var Promise = require('promise');

function runAsync(word){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成'+word);
            resolve('随便什么数据');// 回调函数
        }, 2000);
    });
    return p;            
}

runAsync(1)
.then(function (){
	return runAsync(2)
})
.then(function (){
	return runAsync(3)
})
.then(function (){
	return runAsync(4)
})