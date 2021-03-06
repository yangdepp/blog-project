const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const path = require('path');
const app = new Koa();
const routing = require('./routes');
const { connectionStr } = require('./config');

mongoose.connect(
  connectionStr,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  () => console.log('MongoDB 连接成功了！'),
);
mongoose.connection.on('error', console.error);

app.use(koaStatic(path.join(__dirname, 'public')));
app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest },
  }),
);
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '/public/upload'),
      keepExtensions: true,
    },
  }),
);
app.use(parameter(app));
routing(app);

app.listen(8888, () => console.log('服务已启动在8888端口...正在连接MongoDB数据库...'));
