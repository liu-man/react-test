import React, { Component } from 'react';
import Homebanner from '@/components/homebox/Homebanner';
import Homeprolist from '@/components/homebox/Homeprolist';
import '@/views/css/home.scss'
class Com extends Component {
  constructor (props) {
    super(props);
    console.log(props)
    this.state = {
      value: '',
      count: 0,
      activeIndex: 0
    }
  }
  componentDidMount () {
    this.props.getBannerListData()
  }

  render () {
    // console.log(store)
    // console.log(store.getState())
    // console.log(this.props)
    return (
      <div className = "box">
        <header className = "header">
          <div className="searchbox">
            <div className="searchl">
              <span className="search iconfont icon-sousuo2"></span>
              <span className="write">
                请输入内容
              </span>
              <span className="reset">取消</span>
            </div>
            <div className="ring iconfont icon-lingsheng"></div>
          </div>
        </header>
        <div className = "content">
        <Homebanner homebannerlist = {this.props.homebannerlist}/>
        {/* <Homeprolist homeprolist = {this.props.homeprolist}/> */}
        <div className="homenav">
          <div className="scenic"></div>
          <div className="stay"></div>
          <div className="culture"></div>
          <div className="foot"></div>
        </div>
        </div>
      </div>
    )
  }
}

export default Com;