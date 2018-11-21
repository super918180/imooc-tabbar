import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css'

const tarbarArr = [
  {
    img: 'icon-home',
    text: '首页',
    link: '/home'
  },
  {
    img: 'icon-fenlei',
    text: '分类',
    link: '/category'
  },
  {
    img: 'icon-gouwuche',
    text: '购物车',
    link: '/car'
  },
  {
    img: 'icon-msnui-user',
    text: '我的',
    link: '/user'
  },
]

const Tabbar = (WrappedComponent) => class Tabbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  itemChange = (i) => {
    this.setState({
      index: i
    })
  };

  render() {
    const url = window.location.href
    return (
      <div className='tabbar-container'>
        <div className='tabbar-children'>
          <WrappedComponent />
        </div>
        <div className='tabbar'>
          <div className='tabbar-content'>
            {
              tarbarArr.map((v, i) => (
                <Link to={v.link} key={i} className={'tarbar-item' + (url.indexOf(v.link) > -1 ? ' active' : '')}>
                  <div className={'iconfont ' + v.img} />
                  <div>{v.text}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

    );
  }
}


export default Tabbar;