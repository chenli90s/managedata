import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import SEditor from 'simditor';
import 'simditor/styles/simditor.scss';
import { Input, Grid, Button } from '@icedesign/base';

const { Row, Col } = Grid;

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      filename: '',
      value: {
        产品名字: '',
        产品描述: '',
        产品分类: '',
      },
    };
  }

  componentDidMount = () => {
    console.log(this.editor);
    const editor = new SEditor({
      textarea: this.editor,
      placeholder: '编辑产品文档',
      defaultImage: 'images/image.png',
      params: {},
      upload: true,
      tabIndent: true,
      toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',
        'ul',
        'blockquote',
        'code',
        'table',
        'link',
        'image',
        'hr',
        'indent',
        'outdent',
        'alignment',
      ],
      allowedTags: ['br', 'span', 'a', 'img', 'b', 'strong', 'i', 'strike', 'u', 'font', 'p', 'ul', 'ol', 'li', 'blockquote', 'pre', 'code', 'h1', 'h2', 'h3', 'h4', 'hr'],
      toolbarFloat: true,
      toolbarFloatOffset: 0,
      toolbarHidden: false,
      pasteImage: true,
      cleanPaste: false,
    });
    this.editor = editor;
  };

  onUpLoadFileName = (e) => {
    // console.log(e.target.files[0]);
    if (e.target.files[0]) {
      this.setState({ filename: e.target.files[0].name, file: e.target.files[0],});
    }
  };

  submit = (e) => {

  };

  render() {
    return (
      <div className="editor">
        <IceContainer title="添加产品" style={styles.container}>
          <div className="grouped-form" style={styles.subForm}>
            <Row style={styles.formItem}>
              <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                产品名字：
              </Col>
              <Col s="20" l="20">
                <Input style={{ width: '100%' }} />
              </Col>
            </Row>
            <Row style={{ marginBottom: '25px' }}>
              <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                产品描述：
              </Col>
              <Col s="20" l="20">
                <textarea id="editor"
                  placeholder="Balabala"
                  ref={(ref) => {
                            this.editor = ref;
                          }}
                />
              </Col>
            </Row>
            <Row style={styles.formItem}>
              <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                产品分类：
              </Col>
              <Col s="20" l="20">
                <Input style={{ width: '100%' }} />
              </Col>
            </Row>

            <Row>
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
              </Col>
            </Row>

            <Row style={styles.btns}>
              <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                {' '}
              </Col>
              <Col s="12" l="10">
                <Button type="primary" onClick={this.submit}>
                  添加
                </Button>
              </Col>
            </Row>
          </div>
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
