import React, { Component } from 'react';
import './index.css'

const tarbarArr = [
  {
    img: 'icon-home',
    text: '首页'
  },
  {
    img: 'icon-fenlei',
    text: '分类'
  },
  {
    img: 'icon-gouwuche',
    text: '购物车'
  },
  {
    img: 'icon-msnui-user',
    text: '我的'
  },
]

class Tabbar extends Component {
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
    return (
      <div className='tabbar'>
        <div className='tabbar-content'>
          {
            tarbarArr.map((v, i) => (
              <div key={i} className={'tarbar-item' + (this.state.index === i ? ' active' : '')}
                   onClick={() => this.itemChange(i)}>
                <div className={'iconfont ' + v.img} />
                <div>{v.text}</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Tabbar;