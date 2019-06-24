import React from 'react';
class Com extends React.Component {

  render(){
    console.log(this.props)
    return (
      <div className="box">
        <div className="header">
          <span className="iconfont icon-fanhui"></span>
        </div>
        <div className="userlogo">
          <img src="" alt=""/>
        </div>
        <div className="userinfo">
          <div className="tellreg">
            手机号登录
          </div>
          <input type="tell" className="tellnum" placeholder="请输入登陆密码"/>
          <input type="text" className="writecode" placeholder="请再此输入密码"/>
          <input type="submit" className="sendinfo" value="登陆"/>
        </div>
      </div>
    )
  }
}
export default Com;