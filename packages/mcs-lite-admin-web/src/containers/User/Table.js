import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import {
  WindowScroller,
  AutoSizer,
  Column,
  Table as RVTable,
} from 'react-virtualized';
import styled from 'styled-components';
import { withGetMessages } from 'react-intl-inject-hoc';
import IconSetting from 'mcs-lite-icon/lib/IconSetting';
import 'react-virtualized/styles.css'; // only needs to be imported once
import messages from './messages';

const TABLE_HEIGHT_OFFSET = 200;

/**
 * className
 * ref: https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md#class-names
 *
 * @author Michael Hsu
 */
const StyledTable = styled(RVTable)`
  line-height: 1em;

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
`;

const StyledIcon = styled(IconSetting)`
  color: ${props => props.theme.color.primary};
  cursor: pointer;
`;

const NoRowWrapper = styled.div`
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

  checkedHeaderRenderer = () => {
    const { checkedList, onCheckedListChange } = this.props;
    const { data } = this.props;

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

  editCellRenderer = ({ rowData }) => {
    const { userId } = rowData;

    const onClick = () => {
      this.props.onEditClick(userId);
    };
    return <StyledIcon size={18} onClick={onClick} />;
  };

  noRowsRenderer = () =>
    <NoRowWrapper>{this.props.getMessages('noRows')}</NoRowWrapper>;

  render() {
    const { data, getMessages: t } = this.props;
    const {
      checkedHeaderRenderer,
      checkedCellRenderer,
      editCellRenderer,
      noRowsRenderer,
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
                rowCount={data.length}
                rowGetter={({ index }) => data[index]}
                noRowsRenderer={noRowsRenderer}
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
                  width={300}
                  flexGrow={1}
                />
                <Column
                  label={t('email')}
                  dataKey="email"
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

export default withGetMessages(messages, 'User')(Table);
