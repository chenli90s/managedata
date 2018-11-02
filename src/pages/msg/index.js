import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Switch } from '@icedesign/base';

export default class Price extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      column: [],
    };
  }

  componentDidMount = async () => {
    const opt = await $datas('message')
      .options();
    const column = Object.keys(opt.actions.POST);
    column.splice(column.indexOf('已读'), 1);
    column.splice(column.indexOf('id'), 1);
    const datas = await $datas('message')
      .get();
    console.log(datas);
    this.setState({ datas, column });
  };
  change = async (value) => {
    console.log(value);
    value.已读 = !value.已读;
    await $datas('message')
      .patch(value);
  };

  render() {
    const cellRender = (value, index, record) => {
      return (<Switch defaultChecked={value}
        onChange={() => {
        this.change(record);
      }}
        size="small"
      />);
    };
    return (
      <div>
        <IceContainer title="" style={styles.container}>
          <Table dataSource={this.state.datas}>
            <Table.Column title="已读" dataIndex="已读" cell={cellRender} />
            {this.state.column.map((value, index) => <Table.Column title={value} dataIndex={value} key={index} />)}
          </Table>
        </IceContainer>
      </div>
    );
  }
}


const styles = {
  container: {
    paddingBottom: 30,
  },
  subForm: {
    marginBottom: '20px',
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    fontSize: '14px',
    borderBottom: '1px solid #eee',
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
  addBtn: {
    float: 'right',
  },
};
