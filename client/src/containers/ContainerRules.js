import { connect } from 'react-redux';
import Rules from '../components/Rules';

const mapStateToProps = () => {
  return {
  };
};

const ContainerRules = connect(
  mapStateToProps
)(Rules);

export default ContainerRules;
