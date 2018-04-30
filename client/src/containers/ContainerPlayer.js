import { connect } from 'react-redux';
import Player from '../components/Player';

const mapStateToProps = (state, ownProps) => {
  return {
    player: ownProps.player,
    principal: ownProps.principal
  };
};

const ContainerPlayer = connect(
  mapStateToProps
)(Player);

export default ContainerPlayer;
