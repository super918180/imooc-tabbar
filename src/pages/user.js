import React, { Component } from 'react';
import Tabbar from '../components/tabbar';

class User extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/user.png')} alt="" />
      </div>
    );
  }
}

export default Tabbar(User);