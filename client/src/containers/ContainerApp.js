import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';

// const mapStateToProps = (state) => {
//   return {
//     state: state.cdg
//   };
// };

const ContainerApp = connect(
)(App);

export default withRouter(ContainerApp);
