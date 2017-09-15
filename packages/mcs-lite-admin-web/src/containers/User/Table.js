import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import {
  WindowScroller,
  AutoSizer,
  Column,
  Table as RVTable,
  SortDirection,
} from 'react-virtualized';
import P from 'mcs-lite-ui/lib/P';
import styled from 'styled-components';
import IconEdit from 'mcs-lite-icon/lib/IconEdit';
import 'react-virtualized/styles.css'; // only needs to be imported once

export const TABLE_HEIGHT_OFFSET = 200;

/**
 * className API
 * ref: https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md#class-names
 *
 * @author Michael Hsu
 */
export const StyledTable = styled(RVTable)`
  > * {
    outline: none;
  }

  .ReactVirtualized__Table__headerRow {
    background-color: ${props => props.theme.color.grayLight};
    color: ${props => props.theme.color.grayBase};
    font-weight: normal;
    border-bottom: 1px solid ${props => props.theme.base.bodyBackgroundColor};
    padding-right: 0 !important; /* TODO: donot use important */
  }

  .ReactVirtualized__Table__headerColumn {
    display: flex;
    align-items: center;
  }

  .ReactVirtualized__Table__row {
    border-bottom: 1px solid ${props => props.theme.base.bodyBackgroundColor};
  }

  .ReactVirtualized__Table__sortableHeaderColumn {
    outline: none;
    user-select: none;
  }
`;

export const StyledIcon = styled(IconEdit)`
  color: ${props => props.theme.color.primary};
  cursor: pointer;
`;

export const NoRowWrapper = styled.div`
  text-align: center;
  padding-top: 40px;
`;

class Table extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      }),
    ),
    checkedList: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCheckedListChange: PropTypes.func.isRequired, // (userIdList) => void
    onEditClick: PropTypes.func.isRequired, // (userId) => void

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      sortDirection: SortDirection.ASC,
      sortBy: 'userName',
      sortedList: props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      const { sortBy, sortDirection } = this.state;

      this.setState({
        sortedList: this.sortWithState({ sortBy, sortDirection })(
          nextProps.data,
        ),
      });
    }
  }

  onSort = ({ sortBy, sortDirection }) => {
    this.setState({
      sortBy,
      sortDirection,
      sortedList: this.sortWithState({ sortBy, sortDirection })(
        this.props.data,
      ),
    });
  };

  sortWithState = ({ sortBy, sortDirection }) => {
    const lens = R.prop(sortBy);

    return R.sortWith([
      sortDirection === SortDirection.DESC ? R.descend(lens) : R.ascend(lens),
    ]);
  };

  checkedHeaderRenderer = () => {
    const { data, checkedList, onCheckedListChange } = this.props;

    const isEmpty = R.isEmpty(checkedList);
    const isAllChecked = R.allPass([R.equals(data.length), R.lt(0)])(
      checkedList.length,
    );
    const onChange = () => {
      onCheckedListChange(isEmpty ? R.pluck('userId')(data) : []);
    };
    return <input type="checkbox" checked={isAllChecked} onChange={onChange} />;
  };

  checkedCellRenderer = ({ rowData }) => {
    const { checkedList, onCheckedListChange } = this.props;
    const { userId } = rowData;

    const index = R.findIndex(R.equals(userId))(checkedList);
    const isChecked = index !== -1;
    const onChange = () => {
      onCheckedListChange(
        isChecked
          ? R.remove(index, 1)(checkedList)
          : R.append(userId)(checkedList),
      );
    };
    return <input type="checkbox" checked={isChecked} onChange={onChange} />;
  };

  userNameCellRenderer = ({ rowData }) => {
    const { userName, isActive } = rowData;
    return <P color={isActive ? 'black' : 'grayDark'}>{userName}</P>;
  };
  emailCellRenderer = ({ rowData }) => {
    const { email, isActive } = rowData;
    return <P color={isActive ? 'black' : 'grayDark'}>{email}</P>;
  };

  editCellRenderer = ({ rowData }) => {
    const { userId } = rowData;

    const onClick = () => {
      this.props.onEditClick(userId);
    };
    return <StyledIcon size={18} onClick={onClick} />;
  };

  noRowsRenderer = () =>
    <NoRowWrapper>{this.props.getMessages('noRows')}</NoRowWrapper>;

  rowGetter = ({ index }) => this.state.sortedList[index];

  render() {
    const { getMessages: t } = this.props;
    const { sortBy, sortDirection, sortedList } = this.state;
    const {
      checkedHeaderRenderer,
      checkedCellRenderer,
      userNameCellRenderer,
      emailCellRenderer,
      editCellRenderer,
      noRowsRenderer,
      rowGetter,
      onSort,
    } = this;

    return (
      <WindowScroller>
        {({ height }) =>
          <AutoSizer disableHeight>
            {({ width }) =>
              <StyledTable
                width={width}
                height={height - TABLE_HEIGHT_OFFSET}
                headerHeight={30}
                rowHeight={50}
                rowCount={sortedList.length}
                rowGetter={rowGetter}
                noRowsRenderer={noRowsRenderer}
                sort={onSort}
                sortBy={sortBy}
                sortDirection={sortDirection}
              >
                <Column
                  dataKey={'userId'}
                  headerRenderer={checkedHeaderRenderer}
                  cellRenderer={checkedCellRenderer}
                  width={14}
                  flexShrink={0}
                />
                <Column
                  label={t('name')}
                  dataKey="userName"
                  cellRenderer={userNameCellRenderer}
                  width={300}
                  flexGrow={1}
                />
                <Column
                  label={t('email')}
                  dataKey="email"
                  cellRenderer={emailCellRenderer}
                  width={300}
                  flexGrow={1}
                />
                <Column
                  dataKey={'userId'}
                  cellRenderer={editCellRenderer}
                  width={40}
                  flexShrink={0}
                />
              </StyledTable>}
          </AutoSizer>}
      </WindowScroller>
    );
  }
}

export default Table;
