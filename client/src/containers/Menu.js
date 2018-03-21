import React from 'react'
import { connect } from 'react-redux'
import { emitRestart } from '../sockets';

let Menu = () => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        return emitRestart();
      }}>
        <button type="submit">
          Restart
        </button>
      </form>
    </div>
  )
}

Menu = connect()(Menu)

export default Menu
