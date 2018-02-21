/* global window */
// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { withTheme } from 'styled-components';
import List from 'react-virtualized/dist/commonjs/List/index';
import Overlay from 'react-overlay-pack/lib/Overlay/index';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import rafThrottle from 'raf-throttle';
import Input from '../Input';
import MenuItem from '../Menu/MenuItem';
import emptyFunction from '../utils/emptyFunction';
import {
  StyledMenu,
  StyledInputGroup,
  StyledButton,
  NoRowWrapper,
  FakeInputValue,
} from './styled-components';
import { type Value, type ItemProps } from './type.flow';

export const MAX_HEIGHT = 155;

type Props = {
  value: Value,
  onChange: (value: Value) => Promise<void> | void,
  items: Array<ItemProps>,
  kind?: string,
  placeholder?: string,
  focus?: boolean,
  noRowsRenderer?: ({ onClose: () => void }) => React.Node,
  // Note: innerRef for the problem of outside click in dialog
  innerRef?: (ref: React.ElementRef<typeof StyledMenu>) => void,
};

class PureInputSelect extends React.Component<
  Props & { theme: any },
  {
    isOpen: boolean,
    target: React.ElementRef<any>,
    filter: string,
    width: number,
  },
> {
  static defaultProps = {
    kind: 'primary',
    noRowsRenderer: () => <NoRowWrapper>No results found</NoRowWrapper>,
  };
  state = { isOpen: false, target: null, filter: '', width: 0 };
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    if (this.resize && this.resize.cancel) this.resize.cancel();
  }
  onRef = (target: React.ElementRef<any>) => {
    this.setState(() => ({ target }));
  };
  onOpen = () => this.setState(() => ({ isOpen: true }));
  onClose = () => this.setState(() => ({ isOpen: false }));
  onFilterChange = (e: any) => {
    const { value } = e.target;
    this.setState(() => ({ filter: value }));
  };
  resize = rafThrottle(() => {
    const { target } = this.state;
    const width =
      target &&
      target.getBoundingClientRect &&
      target.getBoundingClientRect().width;

    this.setState(() => ({ width: parseInt(width, 10) }));
  });
  rowRenderer = ({ key, index, style }) => {
    const { items, value, onChange } = this.props;
    const { filter } = this.state;
    const { onClose } = this;
    const filteredItems = items.filter(({ children }: ItemProps) =>
      children.includes(filter),
    );
    const { value: itemValue, children } = filteredItems[index];
    const onItemClick = () => {
      onChange(itemValue);
      this.setState(() => ({ filter: '' }));
      onClose();
    };

    return (
      <MenuItem
        key={key}
        style={style}
        active={itemValue === value}
        onClick={onItemClick}
      >
        {children}
      </MenuItem>
    );
  };
  render() {
    const {
      items,
      kind,
      placeholder,
      theme,
      value,
      noRowsRenderer,
      focus,
      innerRef,
      ...otherProps
    } = this.props;
    const { target, width, isOpen, filter } = this.state;
    const { onRef, onOpen, onClose, onFilterChange, rowRenderer } = this;
    const menuItemHeight = parseInt(theme.height.normal.replace('px', ''), 10);
    const filteredItems = items.filter(({ children }: ItemProps) =>
      children.includes(filter),
    );
    const activeItem = R.find(R.propEq('value', value))(items);
    const menuHeight =
      filteredItems.length < 5
        ? menuItemHeight * filteredItems.length
        : MAX_HEIGHT;

    return (
      <div>
        {/* Input filter */}
        <StyledInputGroup onClick={onOpen} innerRef={onRef}>
          <Input
            kind={kind}
            focus={focus || isOpen}
            value={isOpen ? filter : (activeItem && activeItem.children) || ''}
            onChange={onFilterChange}
            placeholder={isOpen && activeItem ? '' : placeholder}
            onFocus={onOpen}
            {...R.omit(['onChange'])(otherProps)}
          />
          {isOpen &&
            activeItem &&
            !filter && <FakeInputValue defaultValue={activeItem.children} />}
          <StyledButton
            kind={kind}
            active={isOpen}
            square
            onClick={emptyFunction}
          >
            <IconFold />
          </StyledButton>
        </StyledInputGroup>

        {/* Dropdown overlay */}
        {isOpen && (
          <Overlay
            target={target}
            onOutsideClick={onClose}
            resize
            alignConfig={{ points: ['tl', 'bl'], offset: [0, 5] }}
            transitionConfig={{
              style: { transform: 'translateY(-5px)' }, // From
              animation: { translateY: 0, ease: 'easeOutQuart', duration: 350 }, // To
            }}
          >
            <StyledMenu key="menu" ref={innerRef}>
              {filteredItems.length === 0 &&
                noRowsRenderer &&
                noRowsRenderer({ onClose })}
              <List
                width={width}
                height={menuHeight}
                rowCount={filteredItems.length}
                rowHeight={menuItemHeight}
                rowRenderer={rowRenderer}
                scrollToIndex={activeItem ? activeItem.value : undefined}
              />
            </StyledMenu>
          </Overlay>
        )}
      </div>
    );
  }
}

const InputSelect: React.ComponentType<Props> = withTheme(PureInputSelect);
InputSelect.displayName = 'InputSelect';
InputSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired, // (value: Value) => Promise<void> | void,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      children: PropTypes.string,
    }),
  ).isRequired,
  kind: PropTypes.string,
  placeholder: PropTypes.string,
  noRowsRenderer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  focus: PropTypes.bool,
  innerRef: PropTypes.func,
};

export default InputSelect;
