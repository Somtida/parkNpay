import React, { Component } from 'react';


export default class LotDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpot: '',
    };

  }
  selectSpot(num){
    console.log('select: ', num);
    console.log('props',this.props)
    this.setState({selectedSpot: num});
    console.log('state',this.state);
    this.props.pickSpot(num);
  }
  render() {
    console.log('this.props: ', this.props);
    let {totalSpots} = this.props.lot;
    let display = [];
    let display2 = [];
    let display3 = [];
    let selected = {
      backgroundColor: '#000',
      color: '#fff',
    }
    if(totalSpots){
      for(let i=1;i <= totalSpots;i++){
        if(i<=10){
          this.state.selectedSpot===i ? display.push(<td style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display.push(<td className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
        }else if(i <= 20) {
          this.state.selectedSpot===i ? display2.push(<td style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display2.push(<td className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
        }else if(i <= 30) {
          this.state.selectedSpot===i ? display3.push(<td style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display3.push(<td className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
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
        { totalSpots > 10 && totalSpots < 20 ? <tr style={styles}>{display2}</tr> : null }
        { totalSpots > 20 && totalSpots < 30 ? <tr style={styles}>{display3}</tr> : null }

      </tbody>

    )

  }
}
