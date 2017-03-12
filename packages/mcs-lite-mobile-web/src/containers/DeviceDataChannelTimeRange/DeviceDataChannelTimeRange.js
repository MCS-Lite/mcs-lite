import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import {
  MobileHeader, P, DatetimePickerDialog, Button, MobileFixedFooter,
} from 'mcs-lite-ui';
import {
  Container, InputWrapper, FakeInput, ButtonWrapper,
} from './styled-components';
import updatePathname from '../../utils/updatePathname';
import datetimeFormat from '../../utils/datetimeFormat';
import StyledLink from '../../components/StyledLink';

const YEARS = [2015, 2016, 2017, 2018];

class DeviceDataChannelTimeRange extends React.Component {
  static propTypes = {
    // React-router Params
    deviceId: PropTypes.string.isRequired,
    dataChannelId: PropTypes.string.isRequired,

    // Redux State
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,

    // Redux Action
    fetchDeviceDetail: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isDialogshow: false,
      dialogTarget: 'start',
      start: props.start,
      end: props.end,
    };
  }
  componentWillMount = () => this.props.fetchDeviceDetail(this.props.deviceId);
  onStartTimeClick = () => this.setState({ isDialogshow: true, dialogTarget: 'start' });
  onEndTimeClick = () => this.setState({ isDialogshow: true, dialogTarget: 'end' });
  onHide = () => this.setState({ isDialogshow: false });
  onPickerSubmit = value => this.setState({ [this.state.dialogTarget]: value });
  onSubmit = () => {
    const { dataChannelId, setQuery } = this.props;
    const { start, end } = this.state;
    setQuery(dataChannelId, { start, end });
  }
  back = updatePathname(`/devices/${this.props.deviceId}/dataChannels/${this.props.dataChannelId}`);
  render() {
    const { getMessages: t } = this.props;
    const { isDialogshow, start, end, dialogTarget } = this.state;
    const { back, onHide, onPickerSubmit, onStartTimeClick, onEndTimeClick, onSubmit } = this;

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
              <FakeInput >{datetimeFormat(new Date(start))}</FakeInput>
            </InputWrapper>

            <InputWrapper onClick={onEndTimeClick}>
              <P>{t('to')}</P>
              <FakeInput >{datetimeFormat(new Date(end))}</FakeInput>
            </InputWrapper>

            <DatetimePickerDialog
              datetimePickerProps={{
                defaultValue: this.state[dialogTarget],
                years: YEARS,
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
            <StyledLink to={back}>
              <Button block onClick={onSubmit}>{t('save')}</Button>
            </StyledLink>
          </ButtonWrapper>
        </MobileFixedFooter>
      </div>
    );
  }
}

export default DeviceDataChannelTimeRange;
