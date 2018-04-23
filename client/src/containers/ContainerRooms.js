import { connect } from 'react-redux';
import Rooms from '../components/Rooms';

const mapStateToProps = state => {
  return {
    rooms: state.cdg.rooms
  };
};

const ContainerRooms = connect(
  mapStateToProps
)(Rooms);

export default ContainerRooms;
