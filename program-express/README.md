## README

#### 应用级中间件

```
var app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function(req, res, next) {
    console.log('time', Date.now());
    next();
});
```





#### 路由级中间件

```
var app = express();
var router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```

