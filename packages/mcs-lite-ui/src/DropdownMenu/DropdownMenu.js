// @flow
import * as React from 'react';
import Overlay from 'react-overlay-pack/lib/Overlay/index';
import { StyledMenu } from './styled-components';
import { BOTTOM_RIGHT } from './position.config';

type RenderProps = {
  isOpen: boolean,
  open: () => void,
  close: () => void,
  toggle: () => void,
};

class DropdownMenu extends React.Component<
  {
    children: React.Node | (RenderProps => React.Node),
    itemRenderer: RenderProps => React.Node,
    position: Object,
    // Note: innerRef for the problem of outside click in dialog
    innerRef?: (ref: ?React.ElementRef<typeof StyledMenu>) => void,
  },
  { isOpen: boolean },
> {
  static defaultProps = {
    position: BOTTOM_RIGHT,
  };
  state = { isOpen: false };
  onToggle = () => this.setState(() => ({ isOpen: !this.state.isOpen }));
  onHide = () => this.setState(() => ({ isOpen: false }));
  onOpen = () => this.setState(() => ({ isOpen: true }));
  onRef = (target: React.ElementRef<any>) => {
    this.target = target;
  };
  target: ?React.ElementRef<'div'>;
  render() {
    const { children, itemRenderer, innerRef, position } = this.props;
    const { isOpen } = this.state;
    const { onToggle, onHide, onOpen, onRef, target } = this;
    const renderProps: RenderProps = {
      isOpen,
      close: onHide,
      open: onOpen,
      toggle: onToggle,
    };

    return (
      <React.Fragment>
        <div
          ref={onRef}
          onClick={onToggle}
          onKeyPress={onToggle}
          role="button"
          tabIndex="0"
          style={{ display: 'inline-block' }}
        >
          {typeof children === 'function' ? children(renderProps) : children}
        </div>

        <Overlay
          show={isOpen}
          resize
          target={target}
          onOutsideClick={onHide}
          {...position}
        >
          <StyledMenu key="menu" ref={innerRef}>
            {itemRenderer(renderProps)}
          </StyledMenu>
        </Overlay>
      </React.Fragment>
    );
  }
}

export default DropdownMenu;
