import React from 'react';
import 'jsdom';
import 'jsdom-global/register';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import * as actions from '../src/containers/HomePage/actions';
import HomePage from '../src/containers/HomePage';
import store from '../src/middleware/store';
import { Provider } from 'react-redux';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('homePage', () => {
  describe('actions', () => {
    it('Should be ADD', () => {
      expect(actions.ADD).to.be.equal('ADD');
    });
    it('Should be a function', () => {
      expect(actions.add).to.be.a('function');
    });
    it('Should renturn Object', () => {
      expect(actions.add(5)).to.be.a('Object');
    });
    it('Should be a num', () => {
      expect(actions.add(5).num).to.be.equal(5);
    });
  });
  describe('page', () => {
    sinon.spy(HomePage.prototype, 'componentDidMount');
    const wrapper = mount(<Provider store={store}><HomePage /></Provider>);

    it('should a page', () => {
      expect(HomePage.prototype.componentDidMount.calledOnce).to.equal(true);
    });
    it('homePage.props() is Object', () => {
      expect(wrapper.props()).to.be.a('Object');
    });
    it('button click', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.props().store.getState().addNum.get('num')).to.be.equal(1);
    });
    it('constructor', () => {
      expect(wrapper.constructor).to.be.a('Function');
    });
  });
});

