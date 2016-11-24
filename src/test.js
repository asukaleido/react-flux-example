import 'babel-polyfill';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import './routes';

chai.use(chaiEnzyme());

const context = require.context('./', true, /\S+\.spec\.js$/);
context.keys().forEach(context);
