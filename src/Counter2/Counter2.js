import React from 'react'
import {ClickedContext} from '../App'


export default props => {
  return (
      <div style={{
        border: '1px solid red'
      }}>
        <h3>Counter 2</h3>
        <ClickedContext.Consumer>
          {clicked => clicked ? <p>clicked</p> : <p>not</p>}
        </ClickedContext.Consumer>
      </div>
  )
}