import React, { Component } from 'react';
import AddReserveForm from './AddReserveForm'

import ReserveActions from '../actions/ReserveActions'
import ReservationStore from '../stores/ReservationStore'

// let _getComponentState = () => {
//   return {
//     // reservation: ReservationStore.getReservation(this.props.lot._id),
//   }
// }


export default class LotDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedSpots: {}
    }
    // this.state = {
    //   selectedSpot: '',
    //   reservation: '',
    //   // reservation:  _getComponentState(),
    // };
    // // this.state = _getComponentState()
    this._onChange = this._onChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log("NEXT PROPS", nextProps)
    this.setState({selectedSpot: null})
    ReserveActions.getReservationsForLot(nextProps.lot._id)
  }

  componentDidMount() {
    // let lotId = this.props.lot._id;
    // console.log('lotId: ', lotId);
    let { _id } = this.props.lot
    ReserveActions.getReservationsForLot(_id);
    ReservationStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ReservationStore.stopListening(this._onChange)
  }

  _onChange() {
    let { _id } = this.props.lot;
    // console.log('lotId: ', lotId);
    // console.log('7. updating Component state');
    this.setState({occupiedSpots: ReservationStore.getOccupiedSpots(_id)})
  }

  selectSpot(num){
    console.log('select: ', num);
    console.log('props',this.props)
    this.setState({selectedSpot: num});
    console.log('state',this.state);
    this.props.pickSpot(num);
  }

  render() {
    // console.log('this.props: ', this.props);
    //
    // console.log('selectedSpot: ', this.state.selectedSpot);
    // console.log('lot: ', this.props.lot._id);
    // console.log('reservation: ', this.state.reservation);

    // reservedSpots = {1: true, 3: true}

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



    // if(totalSpots){
    //   console.log('totalSpots: ', totalSpots);
    //   console.log('this.state.reservation: ', this.state.reservation);
    //   console.log(this.state.reservation.hasOwnProperty(this.props.lot._id));
    //   console.log(this.state.reservation[this.props.lot._id].indexOf(""+5) !== -1);
    //   for(let i=1;i <= totalSpots;i++){
    //     if(this.state.reservation.hasOwnProperty(this.props.lot._id)){
    //       if(this.state.reservation[this.props.lot._id].indexOf(''+i) !== -1){
    //         console.log('found');
    //         display.push(<td key={i} style={unclickable} className="col-xs-1" disabled>{i}</td>)
    //       }else{
    //         if(i <= 10){
    //           this.state.selectedSpot===i ? display.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
    //         }else if(i <= 20) {
    //           this.state.selectedSpot===i ? display2.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display2.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
    //         }else if(i <= 30) {
    //           this.state.selectedSpot===i ? display3.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display3.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
    //         }
    //       }
    //
    //     }else{
    //       if(i <= 10){
    //         this.state.selectedSpot===i ? display.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
    //       }else if(i <= 20) {
    //         this.state.selectedSpot===i ? display2.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display2.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
    //       }else if(i <= 30) {
    //         this.state.selectedSpot===i ? display3.push(<td key={i} style={selected} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>) : display3.push(<td key={i} className="col-xs-1" onClick={() => this.selectSpot(i)}>{i}</td>);
    //       }
    //     }
    //   }
    // }
    //
    if(totalSpots){

      for(let i=1;i <= totalSpots;i++){
        if(this.state.occupiedSpots.hasOwnProperty(i)){
          // console.log('i: ', i);
          console.log('occupiedSpot', i);
          display.push(<td key={i} style={unclickable} className="col-xs-1" disabled>{i}</td>)
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
      <tbody>

        <tr style={styles}>{display}</tr>
        { totalSpots > 10 && totalSpots < 20 ? <tr style={styles}>{display2}</tr> : null }
        { totalSpots > 20 && totalSpots < 30 ? <tr style={styles}>{display3}</tr> : null }

      </tbody>

    )

  }
}
