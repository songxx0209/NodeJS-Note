var Mock = require('mockjs');

var data = Mock.mock({
	'list|10':[{
		'id|+1':1
	}]
})

console.log(JSON.stringify(data, null, 4));