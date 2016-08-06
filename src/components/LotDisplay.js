import React, { Component } from 'react';

import ReserveActions from '../actions/ReserveActions'
import ReservationStore from '../stores/ReservationStore'

export default class LotDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedSpots: {},
      selectedSpot: '',
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    // console.log("NEXT PROPS", nextProps)
    ReserveActions.getReservationsForLot(nextProps.lot._id)
  }

  componentDidMount() {
    let { _id } = this.props.lot;
    ReserveActions.getReservationsForLot(_id);
    ReservationStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ReservationStore.stopListening(this._onChange)
  }

  _onChange() {
    let { _id } = this.props.lot;
    this.setState({occupiedSpots: ReservationStore.getOccupiedSpots(_id)})
  }

  selectSpot(num){
    this.setState({selectedSpot: num});
    this.props.pickSpot(num);
  }

  render() {
    let { totalSpots } = this.props.lot;
    let display = [];
    let display2 = [];
    let display3 = [];
    let selected = {
      backgroundColor: '#009900',
      color: '#fff',
    }
    let styles = {
      height: '150px',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#eee',

    };
    let unclickable = {
      cursor: 'not-allowed',
      backgroundColor: '#ff9933',
      pointEvents: 'none',
      backgroundImage: 'url("https://cdn3.iconfinder.com/data/icons/auto-parts-2/100/Auto_Parts-32-128.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }

    if(totalSpots){

      for(let i=1;i <= totalSpots;i++){
        if(this.state.occupiedSpots.hasOwnProperty(i)){
          // console.log('occupiedSpot', i);
          if(i<=10){
            display.push(<td key={i} style={unclickable} className="col-xs-1" disabled>{i}</td>)
          }else if(i <= 20) {
            display2.push(<td key={i} style={unclickable} className="col-xs-1" disabled>{i}</td>)
          }else if(i <= 30) {
            display3.push(<td key={i} style={unclickable} className="col-xs-1" disabled>{i}</td>)
          }
        } else {
          if(i<=10){
            this.state.selectedSpot===i ? display.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
          }else if(i <= 20) {
            this.state.selectedSpot===i ? display2.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display2.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
          }else if(i <= 30) {
            this.state.selectedSpot===i ? display3.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display3.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
          }
        }

      }

    }


    return (
      <table className="table table-bordered table-inverse">
        <tbody>

          <tr style={styles}>{display}</tr>
          { totalSpots > 10 ? <tr style={styles}>{display2}</tr> : null }
          { totalSpots > 20 ? <tr style={styles}>{display3}</tr> : null }

        </tbody>
      </table>

    )

  }
}
