import React, { Component } from 'react';

export default class LotDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: '',
    };
  }
  pickSpot(num){
    console.log('pick: ', num);
    this.setState({spot: num});
  }
  render() {
    let columns = this.props.columns[0] || 0;
    // console.log(columns);

    let display = [];
    let display2 = [];
    let display3 = [];
    if(columns){
      for(let i=1;i <= columns.totalSpots;i++){
        if(i<=10){
          display.push(<td onClick={() => this.pickSpot(i)}>{i}</td>);
        }else if(i <= 20) {
          display2.push(<td onClick={() => this.pickSpot(i)}>{i}</td>);
        }else if(i <= 30) {
          display3.push(<td onClick={() => this.pickSpot(i)}>{i}</td>);
        }
      }

    }

    let styles = {
      height: '150px',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#eee',

    };

    return (
      <tbody>
        <tr style={styles}>
          {display}
        </tr>
        <tr style={styles}>
          {display2}
        </tr>
        <tr style={styles}>
          {display3}
        </tr>
      </tbody>

    );

  }
}
