import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = state => {
  return {
    state: state.cdg
  };
};

const ContainerScreen = connect(
  mapStateToProps
)(Screen);

export default ContainerScreen;
