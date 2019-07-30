import { connect } from 'react-redux'
import GrobalStateForm from '../components/GlobalStateForm.jsx'

const mapStateToProps = state => ({
  messages: state.messages,
});
const mapDispatchToProps = dispatch => ({
  onMessageSubmit: message => dispatch({ type: 'ADD_MESSAGE',  message}),
});
const ConnectedForm = connect(mapStateToProps,mapDispatchToProps)(GrobalStateForm);
export default ConnectedForm;
