const express = require('express');

const app = express();
app.use('/', require('connect-history-api-fallback')());
app.use('/', express.static('public'));

if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);
    const webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        },
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }));
    const webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(compiler))
}

const server = app.listen(8080, function () {
    const port = server.address().port;
    console.log('open http://127.0.0.1:%s', port);
});
