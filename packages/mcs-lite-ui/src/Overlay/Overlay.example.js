/* eslint react/no-multi-comp: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { MenuItem, Menu } from '../Menu';
import Button from '../Button';
import Overlay from '.';
import A from '../A';

storiesOf('Overlay', module)
  .addWithInfo(
    'API',
    'state = { show: true }',
    () => {
      class SimpleOverlay extends React.Component {
        state = { show: true, target: undefined };
        onMouseEnter = () => this.setState({ show: !this.state.show });
        onHide = () => this.setState({ show: false });
        getTarget = node => this.setState({ target: node });
        render() {
          return (
            <div>
              <A
                ref={this.getTarget}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onHide}
              >
                Hover me
              </A>

              {this.state.show &&
                <Overlay target={this.state.target} {...this.props}>
                  <div key="div">This is overlay content.</div>
                </Overlay>}
            </div>
          );
        }
      }

      return (
        <SimpleOverlay alignConfig={{ points: ['cl', 'cr'], offset: [5, 0] }} />
      );
    },
    { inline: true, propTables: [Overlay] },
  )
  .addWithInfo(
    'Dropdown Menu',
    'With onHide function for rootClose',
    () => {
      const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
      `;

      const StyledMenu = styled(Menu)`
        width: 300px;
      `;

      class OverlayMenu extends React.Component {
        state = { show: false, target: undefined };
        onClick = () => this.setState({ show: !this.state.show });
        onHide = () => this.setState({ show: false });
        getTarget = node => this.setState({ target: node });
        render() {
          return (
            <div>
              <Button ref={this.getTarget} onClick={this.onClick}>
                Button
              </Button>

              {this.state.show &&
                <Overlay
                  target={this.state.target}
                  onClickOutSide={this.onHide}
                  {...this.props}
                >
                  <StyledMenu key="menu">
                    <MenuItem onClick={action('click 1')}>1</MenuItem>
                    <MenuItem onClick={action('click 2')}>2</MenuItem>
                  </StyledMenu>
                </Overlay>}
            </div>
          );
        }
      }

      return (
        <Wrapper>
          <OverlayMenu
            alignConfig={{ points: ['tl', 'bl'], offset: [0, 16] }}
          />
          <OverlayMenu
            alignConfig={{ points: ['tc', 'bc'], offset: [0, 16] }}
          />
          <OverlayMenu />
        </Wrapper>
      );
    },
    { inline: true, propTables: [Overlay] },
  );
