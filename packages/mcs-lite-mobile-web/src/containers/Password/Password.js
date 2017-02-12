import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'mcs-lite-ui';
import { actions } from '../../modules/auth';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import FixedFooter from '../../components/FixedFooter';
import { Container, Label, ButtonWrapper } from './styled-components';

class Password extends React.Component {
  state = { old: '', new1: '', new2: '' };
  onChange = e => this.setState({ [e.target.id]: e.target.value });
  onSubmit = (e) => {
    this.props.changePassword(this.state);
    e.preventDefault();
  }
  render() {
    const { old, new1, new2 } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <div>
        <Header title="修改密碼" />

        <form onSubmit={onSubmit}>
          <main>
            <Container>
              <div>
                <Label htmlFor="old">請輸入舊密碼</Label>
                <Input id="old" value={old} onChange={onChange} placeholder="請輸入舊密碼" type="password" required />
              </div>
              <div>
                <Label htmlFor="new1">請輸入新密碼</Label>
                <Input id="new1" value={new1} onChange={onChange} placeholder="請輸入舊密碼" type="password" required />
              </div>
              <div>
                <Label htmlFor="new2">再一次輸入新密碼</Label>
                <Input id="new2" value={new2} onChange={onChange} placeholder="再一次輸入新密碼" type="password" required />
              </div>
            </Container>
          </main>

          <FixedFooter>
            <ButtonWrapper>
              <StyledLink to="/account">
                <Button kind="default" block>取消</Button>
              </StyledLink>
              <Button component="input" type="submit" value="儲存" block />
            </ButtonWrapper>
          </FixedFooter>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { changePassword: actions.changePassword },
)(Password);
