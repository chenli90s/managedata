import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@icedesign/base';
import Items from '../items';
import Form from '../form';

export default class GroupedForm0 extends Component {
  constructor(props) {
    super(props);
    const name = this.props.name;
    const cates = $dbs[name];
    this.state = {
      ui: [],
    };
    this.datasources = cates.map(async (value) => {
      const res = await $datas(value)
        .options();
        // console.log(res, value)
      if(!res){
        return
      }
      const data = res.actions.POST;
      // console.log(data)
      // let dt = {}
      data.img = false;
      const fid = [];
      Object.values(data)
        .forEach((val) => {
          if (val.type === 'string') {
            // dt[val.lable] = ''
            fid.push(val.label);
          }
          if (val.type === 'image upload') {
            data.img = val.label.toLowerCase();
          }
        });
      data.name = res.description;
      data.fid = fid;
      data.desc = value;
      // this.state[value] = fid;
      return data;
    });
  }

  async componentDidMount() {
    const ui = await Promise.all(this.datasources);
    this.setState({ ui });
  }


  render() {
    return (
      <div className="grouped-form">
        <IceContainer title="" style={styles.container}>
          {this.state.ui.map(value => (
            <div style={styles.subForm} key={value.name}>
              <h3 style={styles.formTitle}>{value.name}</h3>
              <Items fid={value.fid} name={value.desc} img={value.img} title={value.name} />
            </div>
          ))}
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
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
