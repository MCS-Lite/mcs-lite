import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Transition from 'react-motion-ui-pack';
import Dialog from '../Dialog';
import DatetimePicker from '../DatetimePicker';
import A from '../A';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Header = styled.header`
  height: ${props => props.theme.base.inputHeight};
  background-color: ${props => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
`;

const StyledA = styled(A)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
`;

class DatetimePickerDialog extends React.Component {
  static propTypes = {
    datetimePickerProps: PropTypes.shape({
      defaultValue: PropTypes.number.isRequired, // Unix Timestamp (milliseconds)
      years: PropTypes.array,
    }),
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  static defaultProps = {
    show: false,
  }
  constructor(props) {
    super(props);
    this.state = { value: props.datetimePickerProps.defaultValue };
  }
  onChange = value => this.setState({ value });
  onCancel = () => {
    this.setState({ value: this.props.datetimePickerProps.defaultValue });
    this.props.onHide();
  }
  onSubmit = () => {
    this.props.onSubmit(this.state.value);
    this.props.onHide();
  }
  render() {
    const { onChange, onSubmit, onCancel } = this;
    const { show, datetimePickerProps } = this.props;
    return (
      <Dialog show={show}>
        <Transition
          component={false}
          enter={{ translateY: 0 }}
          leave={{ translateY: 40 }}
        >
          <Container key="container">
            <Header>
              <StyledA onClick={onCancel}>Cancel</StyledA>
              <StyledA onClick={onSubmit}>OK</StyledA>
            </Header>

            <DatetimePicker
              {...datetimePickerProps}
              onChange={onChange}
            />
          </Container>
        </Transition>
      </Dialog>
    );
  }
}

export default DatetimePickerDialog;