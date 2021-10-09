import { LayoutDashboard, Gap } from "../../components";
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from "react";
// import { ExportXLS } from "./ExportXLS";
import axios from 'axios';


export default class Tablereport extends React.Component {
      
      state = {
        searchText: '',
        searchedColumn: '',
        fileName: 'Report',
        datas: []
      };

      componentDidMount() {
        const result = [];
        axios.get("https://mycorsproxy-covid.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi")
        .then(response => {
          for (var i in response.data) {
            result.push(response.data[i].attributes);
          }
          
          this.setState({ datas: result });
          console.log(this.state.datas);
        }) 
      }
      


      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  this.setState({
                    searchText: selectedKeys[0],
                    searchedColumn: dataIndex,
                  });
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
    render() {
        const columns = [
            {
              title: 'Provinsi',
              dataIndex: 'Provinsi',
              key: 'Provinsi',
              ...this.getColumnSearchProps('Provinsi'),
              sorter: (a, b) =>  a.Provinsi.localeCompare(b.Provinsi),
              sortDirections: ['ascend', 'descend', 'ascend'],
            },
            {
              title: 'Kasus Positif',
              dataIndex: 'Kasus_Posi',
              key: 'Kasus_Posi',
            },
            {
              title: 'Kasus Sembuh',
              dataIndex: 'Kasus_Semb',
              key: 'Kasus_Semb',
              
            },
            {
              title: 'Kasus Meninggal',
              dataIndex: 'Kasus_Meni',
              key: 'Kasus_Meni',
            },
          ];
        return (
            <LayoutDashboard title="Report">
                <h1>Informasi mengenai jumlah kasus COVID-19 berdasarkan provinsi di Indonesia</h1>
                
                {/* <ExportXLS csvData={this.state.datas} fileName={this.state.fileName} /> */}
                <Gap height={10}/>
                <Table columns={columns} dataSource={this.state.datas} />;
            </LayoutDashboard>
        )
    }
}