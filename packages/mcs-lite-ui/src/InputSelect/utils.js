// @flow
import * as R from 'ramda';
import { type ItemProps } from './type.flow';

export const MAX_HEIGHT = 155;

export function filterByChildren(
  items: Array<ItemProps>,
  filter: string,
): Array<ItemProps> {
  const regex = new RegExp(filter, 'gi');
  return items.filter(({ children }: ItemProps) => regex.test(children));
}

export function getInputValue({
  isOpen,
  filter,
  activeItem,
}: {
  isOpen: boolean,
  filter: string,
  activeItem?: ItemProps,
}): string {
  let value;

  if (isOpen) {
    value = filter;
  } else {
    value = activeItem ? activeItem.children : '';
  }

  return value;
}

export function getPlaceholder({
  isOpen,
  activeItem,
  placeholder,
}: {
  isOpen: boolean,
  activeItem?: ItemProps,
  placeholder?: string,
}): string {
  if (isOpen && activeItem) return '';

  return placeholder || '';
}

export function getMenuItemHeight(theme: {
  height: {
    normal: string,
  },
}): number {
  return parseInt(theme.height.normal.replace('px', ''), 10);
}

export function getMenuHeight({
  filteredItems,
  menuItemHeight,
}: {
  filteredItems: Array<ItemProps>,
  menuItemHeight: number,
}): number {
  const length = R.length(filteredItems);

  return length < 5 ? menuItemHeight * length : MAX_HEIGHT;
}
