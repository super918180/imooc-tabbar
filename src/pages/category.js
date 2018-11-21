import React, { Component } from 'react';
import Tabbar from '../components/tabbar';

class Category extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/category.png')} alt="" />
      </div>
    );
  }
}

export default Tabbar(Category);