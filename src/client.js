import 'babel-polyfill';
import 'normalize.css';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

ReactDOM.render(require('./routes').default, container);

if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./utils/hmr').default();
    ReactDOM.render(require('./routes').default, container);
  });
}
