import React from 'react'
import { observer } from 'mobx-react'
import store from 'stores/counter'
import clickButton from 'actions/counter-actions'

function Counter() {
  return (
    <div>
      <button type="button" onClick={clickButton}>Click me!</button>
      <h4>You've clicked the button {store.numClicks} times.</h4>
      <h5>You've clicked button an {store.oddOrEven} number of times.</h5>
    </div>
  )
}

export default observer(Counter)

