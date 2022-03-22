import { connect } from "react-redux";
import { Container } from "../../common.style";
import { Email } from "../../component/email";
import { sendEmail, updateSentEmail } from "../../redux/action";
import { getIsAPIError, getIsEmailSent } from "../../redux/selector";

const EmailContainer = (props) => {
  return (
    <Container>
      <Email {...props} />
    </Container>
  );
};
export const mapStateToProps = (state) => {
  return {
    isEmailSent: getIsEmailSent(state),
    isAPIError: getIsAPIError(state)
  };
};
export const mapDispatchToProps = (dispatch) => ({
  sendEmail: (data) => {
    dispatch(sendEmail(data));
  },
  updateIsSentEmail: (data) => {
    dispatch(updateSentEmail(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer);
