import React from 'react'
import PropTypes from 'prop-types'
import Menu from '../containers/Menu'

const Screen = ({ word, tries}) => {
  var res = ""
  for (var i=0; i < word.length; i++) {
    res += word[i] + " "
  }
  return (
  <div>
    <div className="Item">
      {res}
    </div>
    <div className="Item">
      Tries left: {tries}
    </div>
    <Menu />
  </div>
  )
}

Screen.propTypes = {
  word: PropTypes.string.isRequired,
  tries: PropTypes.number.isRequired
}

export default Screen
