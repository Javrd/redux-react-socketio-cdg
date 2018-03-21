import { connect } from 'react-redux'
import App from '../components/App'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    status: state.hangman.status,
    avalibleRooms: state.hangman.avalibleRooms
  }
}

const ContainerApp = connect(
  mapStateToProps
)(App)

export default withRouter(ContainerApp)
