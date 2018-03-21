import { connect } from 'react-redux'
import Rooms from '../components/Rooms'

const mapStateToProps = state => {
  return {
    avalibleRooms: state.hangman.avalibleRooms
  }
}

const ContainerRooms = connect(
  mapStateToProps
)(Rooms)

export default ContainerRooms
