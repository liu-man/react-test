import React from 'react';
import Homebanner from '@/components/homebox/Homebanner'

class Com extends React.Component {
  // componentDidMount () {
  //   this.props.getBannerListData()
  // }
  render(){
    console.log(this.props)
    return (
      <div className="box">
        用户
      </div>
    )
  }
}
export default Com;