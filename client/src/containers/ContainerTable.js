import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: ownProps.cards,
    hand: ownProps.hand
  };
};

const ContainerTable = connect(
  mapStateToProps
)(Table);

export default ContainerTable;
