// @flow
import * as React from 'react';
import styled from 'styled-components';
import Overlay from 'react-overlay-pack/lib/Overlay/index';
import Card from '../Card';
import Arrow from './Arrow';
import { TOP_CENTER } from './position.config';

export const StyledCard = styled(Card)`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${props => props.theme.color.white};
`;

class Tooltip extends React.Component<
  {
    children: React.Node,
    content: React.Node,
    position: {
      card: Object,
      arrow: Object,
    },
    // Note: innerRef for the problem of outside click in dialog
    innerRef?: (ref: React.ElementRef<typeof StyledCard>) => void,
  },
  { isOpen: boolean },
> {
  static defaultProps = {
    position: TOP_CENTER,
  };
  state = { isOpen: false };
  onMouseOver = () => this.setState(() => ({ isOpen: true }));
  onHide = () => this.setState(() => ({ isOpen: false }));
  onRef = (target: React.ElementRef<any>) => {
    this.target = target;
  };
  target: ?React.ElementRef<'div'>;
  render() {
    const { children, content, innerRef, position } = this.props;
    const { isOpen } = this.state;
    const { onMouseOver, onHide, onRef, target } = this;

    return (
      <React.Fragment>
        <div
          ref={onRef}
          onMouseOver={onMouseOver}
          onMouseLeave={onHide}
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
          style={{ pointerEvents: 'none' }}
          {...position.card}
        >
          <StyledCard key="card" ref={innerRef} onMouseOver={onMouseOver}>
            {content}
          </StyledCard>
        </Overlay>

        {/* Note: Arrow */}
        <Overlay
          show={isOpen}
          resize
          target={target}
          style={{ pointerEvents: 'none' }}
          {...position.arrow}
        >
          <Arrow key="arrow" />
        </Overlay>
      </React.Fragment>
    );
  }
}

export default Tooltip;
