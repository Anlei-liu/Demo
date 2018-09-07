import express from 'express';
import fallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import devConfig from './config/dev.config';
import prodConfig from './config/prod.config'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import fs from 'fs'

const app = express();

app.use('/', fallback());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(devConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: devConfig.output.publicPath,
    stats: {
      colors: true,
    },
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use((req, res, next) => {
  const err = new Error('404 not found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

if (process.env.NODE_ENV === 'production') {
  const compiler = webpack(prodConfig);
  compiler.run((err, stats) => {
    if (err) {
      return
    }
    let assets = stats.toJson().assets
    console.log(assets)
  })
}

const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log('open http://127.0.0.1:%s', port);
});
