import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import lists from './style/lists';
import './style/style.css';
import './style/dt.css';


export default class Icon extends Component {


  render() {
    return (
      <IceContainer>
        <h1>复制文字到图标项即可</h1>
        <div className="container">
          {lists.map((value, index) => <div key={index} style={styles.items}><h1 style={styles.icons}><span className={value} /></h1><p>{value}</p></div>)}
        </div>
      </IceContainer>

    );
  }
}

const styles = {
  items: {
    margin: 10,
  },
  icons: {
    fontSize: 50,
    textAlign: 'center',
  },
};
