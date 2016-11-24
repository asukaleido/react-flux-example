import React from 'react';
import { PageStore } from '../../stores';
import { ProgressBar } from '../ui/atoms';
import { Footer, Header } from '../ui/organisms';
import s from './index.css';

export default class Index extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
  };

  state = {
    loadingProgress: { percent: 0 },
  };

  componentWillMount() {
    PageStore.loadingProgress.subscribe(({ percent }) => {
      this.setState({ loadingProgress: { percent } });
    });
  }

  render() {
    return (
      <div>
        <ProgressBar className={s['progress-bar']} percent={this.state.loadingProgress.percent} />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.element,
};

export * from './AboutPage';
export * from './HomePage';
