import { connect } from 'react-redux'
import Screen from '../components/Screen'

const mapStateToProps = state => {
  return {
    word: state.hangman.word,
    tries: state.hangman.tries
  }
}

const ContainerScreen = connect(
  mapStateToProps
)(Screen)

export default ContainerScreen
