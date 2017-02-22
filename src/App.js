import React from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import Main from './components/Main';

function mapStateToProps(state) {
  return {
    plants: state.plantsData
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const App = connect(mapStateToProps, mapDispachToProps)(Main);
