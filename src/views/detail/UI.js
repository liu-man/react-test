import React from 'react';
import Homebanner from '@/components/homebox/Homebanner'

class Com extends React.Component {
  componentDidMount () {
    this.props.getBannerListData()
  }
  render(){
    console.log(this.props)
    return (
      <div className="box">
        首页
        <Homebanner homebannerlist = {this.props.homebannerlist}/>
      </div>
    )
  }
}
export default Com;