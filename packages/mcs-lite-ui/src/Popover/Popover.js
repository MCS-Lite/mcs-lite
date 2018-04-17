// @flow
import * as React from 'react';
import styled from 'styled-components';
import Overlay from 'react-overlay-pack/lib/Overlay/index';
import Card from '../Card';
import Arrow from './Arrow';
import { RIGHT_CENTER } from './position.config';

export const StyledCard = styled(Card)`
  max-width: 280px;
  padding: 10px;
  background-color: ${props => props.theme.color.grayLight};
  border: 1px solid ${props => props.theme.color.grayBase};
`;

class Popover extends React.Component<
  {
    children: React.Node,
    content: React.Node,
    position: {
      card: Object,
      arrow: Object,
    },
    // Note: innerRef for the problem of outside click in dialog
    innerRef?: (ref: ?React.ElementRef<typeof StyledCard>) => void,
  },
  { isOpen: boolean },
> {
  static defaultProps = {
    position: RIGHT_CENTER,
  };
  state = { isOpen: false };
  onClick = () => this.setState(() => ({ isOpen: !this.state.isOpen }));
  onHide = () => this.setState(() => ({ isOpen: false }));
  onRef = (target: React.ElementRef<any>) => {
    this.target = target;
  };
  target: ?React.ElementRef<'div'>;
  render() {
    const { children, content, innerRef, position } = this.props;
    const { isOpen } = this.state;
    const { onClick, onHide, onRef, target } = this;

    return (
      <React.Fragment>
        <div
          ref={onRef}
          onClick={onClick}
          onKeyPress={onClick}
          role="button"
          tabIndex="0"
          style={{ display: 'inline-block' }}
        >
          {children}
        </div>

        {/* Note: Card */}
        <Overlay
          show={isOpen}
          resize
          target={target}
          onOutsideClick={onHide}
          {...position.card}
        >
          <StyledCard key="card" ref={innerRef}>
            {content}
          </StyledCard>
        </Overlay>

        {/* Note: Arrow */}
        <Overlay show={isOpen} resize target={target} {...position.arrow}>
          <Arrow key="arrow" />
        </Overlay>
      </React.Fragment>
    );
  }
}

export default Popover;
