import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { MobileHeader, P, DatetimePickerDialog, Button, MobileFixedFooter } from 'mcs-lite-ui';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import { Link } from 'react-router';
import { Container, InputWrapper, FakeInput, ButtonWrapper } from './styled-components';
import updatePathname from '../../utils/updatePathname';
import datetimeFormat from '../../utils/datetimeFormat';
import StyledLink from '../../components/StyledLink';

class DeviceDataChannelTimeRange extends React.Component {
  static propTypes = {
    deviceId: PropTypes.string.isRequired,
    getMessages: PropTypes.func.isRequired,
    fetchDeviceDetail: PropTypes.func.isRequired,
  }
  state = {
    isDialogshow: false,
    dialogTarget: 'startTime',
    startTime: new Date(1463556631722).valueOf(),
    endTime: new Date(1463556631722).valueOf(),
  };
  componentWillMount = () => this.props.fetchDeviceDetail(this.props.deviceId);
  onStartTimeClick = () => this.setState({ isDialogshow: true, dialogTarget: 'startTime' });
  onEndTimeClick = () => this.setState({ isDialogshow: true, dialogTarget: 'endTime' });
  onHide = () => this.setState({ isDialogshow: false });
  onPickerSubmit = value => this.setState({ [this.state.dialogTarget]: value });
  back = updatePathname(`/devices/${this.props.deviceId}/dataChannels/${this.props.dataChannelId}`);
  render() {
    const { getMessages: t } = this.props;
    const { isDialogshow, startTime, endTime, dialogTarget } = this.state;
    const { back, onHide, onPickerSubmit, onStartTimeClick, onEndTimeClick } = this;

    return (
      <div>
        <Helmet title={t('searchTimeRange')} />
        <MobileHeader.MobileHeader
          title={t('searchTimeRange')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon component={Link} to={back}>
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
        />

        <main>
          <Container>
            <InputWrapper onClick={onStartTimeClick}>
              <P>{t('from')}</P>
              <FakeInput >{datetimeFormat(new Date(startTime))}</FakeInput>
            </InputWrapper>

            <InputWrapper onClick={onEndTimeClick}>
              <P>{t('to')}</P>
              <FakeInput >{datetimeFormat(new Date(endTime))}</FakeInput>
            </InputWrapper>

            <DatetimePickerDialog
              datetimePickerProps={{
                defaultValue: this.state[dialogTarget],
                years: [2015, 2016, 2017, 2018],
              }}
              show={isDialogshow}
              onHide={onHide}
              onSubmit={onPickerSubmit}
            />
          </Container>
        </main>

        <MobileFixedFooter>
          <ButtonWrapper>
            <StyledLink to={back}>
              <Button kind="default" block>{t('cancel')}</Button>
            </StyledLink>
            <Button component="input" type="submit" value={t('save')} block />
          </ButtonWrapper>
        </MobileFixedFooter>
      </div>
    );
  }
}

export default DeviceDataChannelTimeRange;
