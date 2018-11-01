import React, { Component } from 'react';
// import IceContainer from '@icedesign/container';
import { Button, Accordion, Grid } from '@icedesign/base';
import Form from '../form';

const { Panel } = Accordion;
const { Row, Col } = Grid;

export default class GroupedForm extends Component {
  constructor(props) {
    super(props);
    this.fid = props.fid;
    this.name = props.name;
    // console.log(this.fid);
    // console.log(this.name);
    this.state = { datas: [] };
  }

  async componentDidMount() {
    const datas = await $datas(this.name)
      .get();
    // console.log(datas);
    this.setState({ datas });
  }

  flush = async () => {
    const datas = await $datas(this.name)
      .get();
    // console.log(datas);
    this.setState({ datas });
  };

  render() {
    let blank = false;
    let isAdd = false;
    if (this.state.datas.length > 0) {
      blank = this.state.datas[0].more;
      isAdd = this.state.datas[0].more;
      // console.log(this.state.datas)
    } else {
      blank = true;
    }
    const dt = {};
    this.fid.forEach((val) => {
      dt[val] = '';
    });
    const { img, title } = this.props;
    // console.log(title);
    if (title === '我们的产品') {
      // blank = false;
    }
    return (
      <div>
        {isAdd ?
          <Accordion>
            {this.state.datas.map((val) => {
              return (
                <Panel
                  multiTitle
                  title={val[this.fid[0]]}
                  key={val.id}
                >
                  <Form fid={this.fid} data={val} name={this.name} flush={this.flush} img={img} />
                </Panel>
              );
            })}
          </Accordion>
          : this.state.datas.length > 0 &&
          <Form fid={this.fid} data={this.state.datas[0]} name={this.name} flush={this.flush} img={img} />}

        {blank &&
        <Row style={styles.btns}>
          <Col xxs="6" s="3" l="3" style={styles.formLabel}>
            {' '}
          </Col>
          <Col s="24" l="20">
            <div><h1 style={styles.formTitle}>- 添加:</h1><Form fid={this.fid}
              data={dt}
              name={this.name}
              flush={this.flush}
              isAdd
              img={img}
            />
            </div>
          </Col>
        </Row>}

      </div>
    );
  }
}

const styles = {
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    fontSize: '14px',
    borderBottom: '1px solid #eee',
  },
};
