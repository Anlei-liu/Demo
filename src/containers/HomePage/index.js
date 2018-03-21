import React from 'react';
import { connect } from 'react-redux';
import { add } from './actions';
import selectNum from './selectors';
import styles from './styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }
  add() {
    const {dispatchAdd, num} = this.props;
    const c = num + 1;
    dispatchAdd(c);
  }
  render() {
    const { num } = this.props;
    return (
      <div className={ styles.addNum }>
        <span>{ num }</span>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

const mapStateToProps = selectNum();

const mapDispatchToProps = dispatch => ({
  dispatchAdd: (num) => {
    dispatch(add(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
