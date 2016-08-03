import React, { Component } from 'react';


export default class LotDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpot: '',
    };

  }
  pickSpot(num){
    console.log('pick: ', num);
    this.setState({selectedSpot: num});
  }
  render() {

    let {totalSpots} = this.props.lot;
    console.log('totalSpots: ', this.props);
    let display = [];
    let display2 = [];
    let display3 = [];
    let selected = {
      backgroundColor: '#000',
    }
    if(totalSpots){
      for(let i=1;i <= totalSpots;i++){
        if(i<=10){
          this.state.selectedSpot===i ? display.push(<td style={selected} onClick={() => this.pickSpot(i)}>{i}</td>) : display.push(<td onClick={() => this.pickSpot(i)}>{i}</td>);
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

    )

  }
}
