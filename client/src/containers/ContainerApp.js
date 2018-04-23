import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    rooms: state.cdg.rooms
  };
};

const ContainerApp = connect(
    mapStateToProps
  )(App);

export default withRouter(ContainerApp);
