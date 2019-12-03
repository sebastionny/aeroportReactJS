import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Icon, IconButton } from 'rsuite';
import fakeData from './data.js';

const rowKey = 'id';
const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props}>
    <IconButton
      size="xs"
      appearance="primary"
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
    const data = fakeData.filter((v, i) => i < 14);
    this.state = {
      data,
      addColumn: false,
      expandedRowKeys: []
    };
    this.handleExpanded = this.handleExpanded.bind(this);
    this.handleSortColumn = this.handleSortColumn.bind(this);
  }


  getData() {
    const { data, sortColumn, sortType } = this.state;

    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  }

  handleSortColumn(sortColumn, sortType) {
    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        sortColumn,
        sortType,
        loading: false
      });
    }, 300);
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
        data={this.getData()}
        rowHeight={32}
        rowKey={rowKey}
        sortColumn={this.state.sortColumn}
        sortType={this.state.sortType}
        onSortColumn={this.handleSortColumn}
        loading={this.state.loading}
        expandedRowKeys={expandedRowKeys}
        onRowClick={data => {
          console.log(data);
        }}
        renderRowExpanded={rowData => {
          return (
            <div>
              <div
                style={{
                  width: 60,
                  height: 60,
                  float: 'left',
                  marginRight: 10,
                  background: '#EEE',
                }}
              >
                <img src={rowData.avartar} style={{ width: 60 }} />
              </div>
              <h4>{rowData.email}</h4>
              <p>{rowData.date}</p>
            </div>
          );
        }}
      >
        <Column width={60} fixed sortable>
          <HeaderCell>TYPE</HeaderCell>
          <ExpandCell
            dataKey="TYPE"
            expandedRowKeys={expandedRowKeys}
            onChange={this.handleExpanded}
          />
        </Column>

        <Column width={80} fixed sortable>
          <HeaderCell># VOL</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={110} sortable>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={60} sortable >
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