import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from '@/views/register'
import Login from '@/views/login'
import Detail from '@/views/detail'
import Scenic from '@/views/scenic'
import Food from '@/views/food'
import '@/register.scss'
function Detailstyle () {
  return (
    <div className="container2">
      <Switch>
        <Route path = "/register" component = { Register }/>
        <Route path = "/detail" component = { Detail }/>
        <Route path = "/login" component = { Login }/>
        <Route path = "/scenic" component = { Scenic }/>
        <Route path = "/food" component = { Food }/>
      </Switch>
    </div>
  )
}

export default Detailstyle;