import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Button,
  // Select,
  Checkbox,
  Grid,
} from '@icedesign/base';

const { Row, Col } = Grid;
const CheckboxGroup = Checkbox.Group;


export default class GroupedForm extends Component {
  static displayName = 'GroupedForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    const { fid, data, name } = this.props;
    this.name = name;
    // console.log(fid)
    // this.state = {
    //   value: {
    //     title: '',
    //     price: '',
    //     desc: '',
    //     type: '',
    //     deliveryType: '',
    //     deliveryFee: '',
    //   },
    // };
    this.state = {
      value: data,
      fid,
      filename: '',
      img: '',
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = async () => {
    if (this.state.value) {
      await $datas(this.name)
        .delete(this.state.value);
    }
    await this.props.flush();
  };

  onUpLoadFileName = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      this.setState({ filename: e.target.files[0].name, file: e.target.files[0], img: e.target.files[0] });
    }
  };

  submit = () => {
    this.formRef.validateAll((error, value) => {
      // console.log('error', error, 'value', value);
      if (error) {
        // 处理表单报错
      }
      // 提交当前填写的数据
      const form = new FormData();
      form.append('上传图片', this.state.file);
      this.state.fid.forEach((val) => {
        console.log(val, value[val]);
        form.append(val, value[val]);
      });
      console.log(form);
      $datas(this.name)
        .post(form);
      this.reset();
    });
  };

  render() {
    const { isAdd } = this.props;
    return (
      <div className="grouped-form">
        <IceFormBinderWrapper
          ref={(formRef) => {
            this.formRef = formRef;
          }}
          value={this.state.value}
          onChange={this.onFormChange}
        >
          <div>
            {this.state.fid.map((value, index) => {
              return (
                <Row key={index}>
                  <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                    {value}：
                  </Col>
                  <Col s="12" l="10">
                    <IceFormBinder name={value}>
                      <Input multiple style={{ width: '100%' }} />
                    </IceFormBinder>
                  </Col>
                </Row>
              );
            })}

            {<Row>
              <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                上传图片：
              </Col>
              <Col s="12" l="10">
                <input
                  type="file"
                  style={{ display: 'none' }}
                  accept={this.props.accept}
                  name="上传图片"
                  ref={(ref) => {
                    this.file = ref;
                  }}
                  onChange={this.onUpLoadFileName}
                />
                <Input style={{ width: '100%' }}
                  value={this.state.filename}
                  placeholder="点击上传图片"
                  // onFocus={this.onSelect}
                  onClick={() => this.file.click()}
                  ref={(ref) => {
                         this.input = ref;
                       }}
                />
                {this.state.value.上传图片&&<img style={styles.img} src={this.state.value.上传图片 && this.state.value.上传图片.split('/api/slider')
                  .join('')}
                  alt=""
                />}
              </Col>
            </Row>}

            <Row style={styles.btns}>
              <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                {' '}
              </Col>
              <Col s="12" l="10">
                <Button type="primary" onClick={this.submit}>
                  {isAdd ? '添加' : '提交'}
                </Button>
                {!isAdd && <Button type="secondary" style={styles.resetBtn} onClick={this.reset}>
                  删除
                </Button>}
              </Col>
            </Row>
          </div>
        </IceFormBinderWrapper>
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
  img: {
    height: '150px',
    width: '180px',
  },
};
