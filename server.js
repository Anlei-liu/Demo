import express from 'express';
import fallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import apiRoutes from './server/index';
import webpackConfig from './config/webpack.dev';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

app.use('/', fallback());
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
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

const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log('open http://127.0.0.1:%s', port);
});

