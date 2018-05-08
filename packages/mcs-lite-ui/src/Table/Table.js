import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead tr {
    background-color: ${props => props.theme.color.grayLight};
    color: ${props => props.theme.color.grayDark};

    > * {
      padding: 8px 0 8px 16px;
    }
  }

  tr {
    border-bottom: 1px solid ${props => props.theme.base.bodyBackgroundColor};

    > * {
      padding: 16px 0 16px 16px;
    }
  }

  th {
    text-align: left;
    font-weight: normal;
  }
`;

Table.displayName = 'Table';
Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
