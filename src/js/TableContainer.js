import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Icon, IconButton } from 'rsuite';
import fakeData from './data.js';

const rowKey = 'id';
const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props}>
    <IconButton
      size="xs"
      appearance="subtle"
      onClick={() => {
        onChange(rowData);
      }}
      icon={
        <Icon
          icon={
            expandedRowKeys.some(key => key === rowData[rowKey])
              ? 'minus-square-o'
              : 'plus-square-o'
          }
        />
      }
    />
  </Cell>
);

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      expandedRowKeys: []
    };
    this.handleExpanded = this.handleExpanded.bind(this);
  }
  handleExpanded(rowData, dataKey) {
    const { expandedRowKeys } = this.state;

    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach(key => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }
    this.setState({
      expandedRowKeys: nextExpandedRowKeys
    });
  }
  render() {
    const { expandedRowKeys, data,  } = this.state;
    return (
      <Table
        height={500}
        data={data}
        rowHeight={32}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        onRowClick={data => {
          console.log(data);
        }}
        renderRowExpanded={rowData => {
          return (
            <div>
              <div
                style={{
                  width: 20,
                  height: 20,
                  float: 'left',
                  marginRight: 2,
                  background: '#eee',
                }}
              >
                <img src={rowData.avartar} style={{ width: 20 }} />
              </div>
              <p>{rowData.email}</p>
              <p>{rowData.date}</p>
            </div>
          );
        }}
      >
        <Column width={30} align="center">
          <HeaderCell>#</HeaderCell>
          <ExpandCell
            dataKey="TYPE"
            expandedRowKeys={expandedRowKeys}
            onChange={this.handleExpanded}
          />
        </Column>

        <Column width={80}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130} sortable={true}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={60}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={100}>
          <HeaderCell>Street</HeaderCell>
          <Cell dataKey="street" />
        </Column>

        <Column width={200}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>
      
      </Table>
    );
  }
}
export default TableContainer;