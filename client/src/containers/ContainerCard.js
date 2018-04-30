import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  return {
    cardType: ownProps.card.type,
    cardId: ownProps.card.id,
    hand: ownProps.hand
  };
};

const ContainerCard = connect(
  mapStateToProps
)(Card);

export default ContainerCard;
