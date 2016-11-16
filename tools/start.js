import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-middleware';
import clean from './clean';
import webpackConfig from './webpack.config';
import run from './run';
import runServer from './runServer';

process.argv.push('--watch');

const [config] = webpackConfig;

async function start() {
  await run(clean);
  await new Promise(resolve => {
    // Hot Module Replacement (HMR) + React Hot Reload
    if (config.debug) {
      config.entry = ['react-hot-loader/patch', 'webpack-hot-middleware/client', config.entry];
      config.output.filename = config.output.filename.replace('[chunkhash]', '[hash]');
      config.output.chunkFilename = config.output.chunkFilename.replace('[chunkhash]', '[hash]');
      config.module.loaders
        .find(x => x.loader === 'babel-loader')
        .query.plugins.unshift('react-hot-loader/babel');
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.plugins.push(new webpack.NoErrorsPlugin());
    }

    const bundler = webpack(webpackConfig);
    const middleware = webpackMiddleware(bundler, {
      publicPath: config.output.publicPath,
      stats: config.stats,
    });
    const hotMiddleware = webpackHotMiddleware(bundler.compilers[0]);

    let handleBundleComplete = async () => {
      handleBundleComplete = ({ stats }) => {
        if (!stats[1].compilation.errors.length) runServer();
      };

      const server = await runServer();
      const bs = browserSync.create();

      bs.init({
        ...(config.debug ? {} : { notify: false, ui: false }),

        proxy: {
          target: server.host,
          middleware: [middleware, hotMiddleware],
        },
      }, resolve);
    };

    bundler.plugin('done', stats => handleBundleComplete(stats));
  });
}

export default start;
