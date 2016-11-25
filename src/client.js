import 'babel-polyfill';
import 'normalize.css';
import ReactDOM from 'react-dom';
import './vendor';

const container = document.getElementById('app');

ReactDOM.render(require('./routes').default, container);

if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./utils/hmr').default();
    ReactDOM.render(require('./routes').default, container);
  });
}
