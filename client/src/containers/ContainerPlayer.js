import { connect } from 'react-redux';
import Player from '../components/Player';
import { FINISHED } from '../utils';

const mapStateToProps = (state, ownProps) => {
  return {
    player: ownProps.player,
    principal: ownProps.principal,
    finished: state.cdg.state === FINISHED,
    playedICard: state.cdg.playedCard
  };
};

const ContainerPlayer = connect(
  mapStateToProps
)(Player);

export default ContainerPlayer;
