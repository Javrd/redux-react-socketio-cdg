import { connect } from 'react-redux';
import Misc from '../components/Misc';

const mapStateToProps = (state) => {
  return {
    state: state.cdg
  };
};

const ContainerMisc = connect(
  mapStateToProps
)(Misc);

export default ContainerMisc;
