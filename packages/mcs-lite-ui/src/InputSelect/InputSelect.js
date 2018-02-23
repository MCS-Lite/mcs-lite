/* global window */
// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { withTheme } from 'styled-components';
import List from 'react-virtualized/dist/commonjs/List/index';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer/index';
import Overlay from 'react-overlay-pack/lib/Overlay/index';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import rafThrottle from 'raf-throttle';
import Input from '../Input';
import MenuItem from '../Menu/MenuItem';
import {
  StyledMenu,
  StyledInputGroup,
  StyledButton,
  NoRowWrapper,
  FakeInputValue,
} from './styled-components';
import { type Value, type ItemProps } from './type.flow';
import {
  filterByChildren,
  getInputValue,
  getPlaceholder,
  getMenuItemHeight,
  getMenuHeight,
} from './utils';

type Props = {
  value: Value,
  onChange: (value: Value) => Promise<void> | void,
  items: Array<ItemProps>,
  kind?: string,
  placeholder?: string,
  focus?: boolean,
  noRowsRenderer?: ({ onClose: () => void }) => React.Node,
  disableFilter?: boolean,
  // Note: innerRef for the problem of outside click in dialog
  menuRef?: (ref: React.ElementRef<typeof StyledMenu>) => void,
};

class PureInputSelect extends React.Component<
  Props & { theme: Object },
  {
    isOpen: boolean,
    target: React.ElementRef<any>,
    filter: string,
    menuWidth: number,
  },
> {
  static defaultProps = {
    kind: 'primary',
    noRowsRenderer: () => <NoRowWrapper>No results found</NoRowWrapper>,
    disableFilter: false,
  };
  state = { isOpen: false, target: null, filter: '', menuWidth: 0 };
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    if (this.resize && this.resize.cancel) this.resize.cancel();
  }
  onRef = (target: React.ElementRef<any>) => this.setState(() => ({ target }));
  onOpen = () => this.setState(() => ({ isOpen: true }));
  onClose = () => this.setState(() => ({ isOpen: false }));
  onToggle = (e: any) => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  onFilterChange = (e: any) => {
    const { value } = e.target;
    this.setState(() => ({ filter: value }));
  };
  resize = rafThrottle(() => {
    const { target } = this.state;
    const menuWidth =
      target &&
      target.getBoundingClientRect &&
      target.getBoundingClientRect().width;

    this.setState(() => ({ menuWidth: parseInt(menuWidth, 10) }));
  });
  rowRenderer = ({
    key,
    index,
    style,
  }: {
    key: string,
    index: number,
    style: Object,
  }): React.Element<typeof MenuItem> => {
    const { items, value, onChange } = this.props;
    const { filter } = this.state;
    const { onClose } = this;
    const filteredItems = filterByChildren(items, filter);
    const { value: itemValue, children }: ItemProps = filteredItems[index];
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
      menuRef,
      disableFilter,
      ...otherProps
    } = this.props;
    const { target, menuWidth, isOpen, filter } = this.state;
    const {
      onRef,
      onOpen,
      onClose,
      onToggle,
      onFilterChange,
      rowRenderer,
    } = this;

    const filteredItems = filterByChildren(items, filter);
    const activeIndex = R.findIndex(R.propEq('value', value))(items);
    const activeItem = items[activeIndex];
    const menuItemHeight = getMenuItemHeight(theme);
    const menuHeight = getMenuHeight({ filteredItems, menuItemHeight });

    return (
      <div>
        {/* Input filter */}
        <StyledInputGroup innerRef={onRef} disableFilter={disableFilter}>
          <Input
            kind={kind}
            focus={focus || isOpen}
            value={getInputValue({ isOpen, filter, activeItem })}
            onChange={onFilterChange}
            placeholder={getPlaceholder({ isOpen, activeItem, placeholder })}
            onFocus={onOpen}
            readOnly={disableFilter}
            onClick={onOpen}
            {...R.omit(['onChange'])(otherProps)}
          />
          {isOpen &&
            activeItem &&
            !filter && <FakeInputValue defaultValue={activeItem.children} />}
          <StyledButton
            kind={kind}
            active={focus || isOpen}
            square
            onClick={onToggle}
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
            <StyledMenu key="menu" innerRef={menuRef} width={menuWidth}>
              {R.isEmpty(filteredItems) &&
                noRowsRenderer &&
                noRowsRenderer({ onClose })}
              <AutoSizer disableHeight>
                {({ width }) => (
                  <List
                    width={width}
                    height={menuHeight}
                    rowCount={filteredItems.length}
                    rowHeight={menuItemHeight}
                    rowRenderer={rowRenderer}
                    scrollToIndex={activeIndex}
                    style={{ willChange: 'unset' }} // TODO: disabled for scrolling problem
                  />
                )}
              </AutoSizer>
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
  noRowsRenderer: PropTypes.func,
  focus: PropTypes.bool,
  disableFilter: PropTypes.bool,
  menuRef: PropTypes.func,
};

export default InputSelect;
