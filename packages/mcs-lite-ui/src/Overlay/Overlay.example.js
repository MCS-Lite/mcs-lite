/* eslint react/no-multi-comp: 0 */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { MenuItem, Menu } from '../Menu';
import Button from '../Button';
import Overlay from '.';
import A from '../A';

storiesOf('Overlay', module)
  .addWithInfo(
    'API',
    '',
    () => {
      class SimpleOverlay extends React.Component {
        state = { show: false };
        onMouseEnter = () => this.setState({ show: !this.state.show });
        onHide = () => this.setState({ show: false });
        render() {
          return (
            <div>
              <A
                ref={(node) => { this.target = node; }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onHide}
              >
                Hover me
              </A>

              {
                this.state.show && (
                  <Overlay
                    target={this.target}
                    {...this.props}
                  >
                    <div key="div">This is overlay content.</div>
                  </Overlay>
                )
              }
            </div>
          );
        }
      }

      return <SimpleOverlay alignConfig={{ points: ['cl', 'cr'], offset: [5, 0]}} />;
    },
    { inline: true, propTables: [Overlay]},
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
        state = { show: false };
        onClick = () => {
          this.setState({ show: !this.state.show });
        }
        onHide = () => this.setState({ show: false });
        render() {
          return (
            <div>
              <Button ref={(node) => { this.target = node; }} onClick={this.onClick}>
                Button
              </Button>

              {
                this.state.show && (
                  <Overlay
                    target={this.target}
                    onClickOutSide={this.onHide}
                    {...this.props}
                  >
                    <StyledMenu key="menu">
                      <MenuItem onClick={action('click 1')}>1</MenuItem>
                      <MenuItem onClick={action('click 2')}>2</MenuItem>
                    </StyledMenu>
                  </Overlay>
                )
              }
            </div>
          );
        }
      }

      return (
        <Wrapper>
          <OverlayMenu alignConfig={{ points: ['tl', 'bl'], offset: [0, 16]}} />
          <OverlayMenu alignConfig={{ points: ['tc', 'bc'], offset: [0, 16]}} />
          <OverlayMenu
            transitionConfig={{
              component: false,
              enter: {
                opacity: 1,
              },
              leave: {
                opacity: 0,
              },
            }}
          />
        </Wrapper>
      );
    },
    { inline: true, propTables: [Overlay]},
  );
