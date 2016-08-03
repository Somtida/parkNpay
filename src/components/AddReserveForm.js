import React, { Component } from 'react'
import ReserveActions from '../actions/ReserveActions'

export default class AddReserveForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      lot: 'A',
      spot: '',
      duration: 'allDay',
    }


    this.onSubmit = this.onSubmit.bind(this);
  }
  // checkAvaliable(spot){
  //   console.log('checking avaliable spot');
  //   let avaliable = [true, true, true, true, true, true, true, true, true, true,
  //     true, true, true, true, true, true, true, true, true, true,
  //     true, true, true, true, true, true, true, true, true, true];
  //   if (avaliable[spot]){
  //     avaliable[spot] = !avaliable[spot];
  //     console.log('avaliable');
  //     return true;
  //   }else{
  //     console.log('not avaliable');
  //     return false;
  //   }
  // }

  onSubmit(event) {
    event.preventDefault();
    // if (!this.state.name.length || !this.state.email.length || !this.state.phone.length || !this.state.lot.length || !this.state.spot.length || !this.state.duration.length) return;
      console.log('1. send to actions.addNewReserve in ReserveActions: ', this.state);
      ReserveActions.addNewReserve(this.state);
      this.setState({name: '', email: '', phone: '', lot: 'A', spot: '', duration: 'allDay'})
    // if (this.checkAvaliable(this.state.spot)){
    //   console.log('1. send to actions.addNewReserve in ReserveActions: ', this.state);
    //   ReserveActions.addNewReserve(this.state);
    //   this.setState({name: '', email: '', phone: '', lot: 'A', spot: '', duration: 'allDay'})
    // }else{
    //   console.log('this spot is not avaliable');
    // }
  }

  render() {
    console.log('spot: ', this.props.spot);
    let spot = this.props.spot;
    console.log('lot: ', this.props.lot);
    let lot = this.props.lot;
    return (
      <div className="panel panel-primary">
      <div className="panel-heading text-left">Form</div>
      <div className="panel-body">
        <form>
          {/*<div>
            <h1 className="label label-danger">{lot.name}{spot}</h1>
          </div>*/}
          <div >
            <div className="alert alert-success">
              <h1>{lot.name}{spot}</h1>
            </div>
          </div>
          {/*<div className="form-group row">
            <label htmlFor="customerLot" className="col-xs-2 col-form-label">Lot</label>
            <div className="col-xs-4">
              <h3>{lot}</h3>
            </div>
            <label htmlFor="customerSpot" className="col-xs-2 col-form-label">Spot</label>
            <div className="col-xs-4">
              <h3>{spot}</h3>
            </div>

          </div>
          */}
          <div className="form-group row">
            <label htmlFor="customerName" className="col-xs-2 col-form-label">Name</label>
            <div className="col-xs-10">
              <input
                type="text"
                className="form-control"
                id="customerName"
                placeholder="Bob Burger"
                value={this.state.name}
                onChange={e => this.setState({name: e.target.value})}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="customerEmail" className="col-xs-2 col-form-label">Email</label>
            <div className="col-xs-10">
              <input
                type="email"
                className="form-control"
                id="customerEmail"
                placeholder="bob@burger.com"
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="customerDuration" className="col-xs-2 col-form-label">Duration</label>
            <div className="col-xs-10">
              <select
                className="form-control"
                id="customerDuration"
                value={this.state.duration}
                onChange={e => this.setState({duration: e.target.value})}>
                <option value="allDay">All day</option>
                {/*<option value="1">An Hour</option>
                <option value="2">2 Hours</option>*/}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="customerPhone" className="col-xs-2 col-form-label">Phone</label>
            <div className="col-xs-10">
              <input
                type="tel"
                className="form-control"
                id="customerPhone"
                placeholder="1-(555)-555-5555"
                value={this.state.phone}
                onChange={e => this.setState({phone: e.target.value})}
              />
            </div>
          </div>
          <div >
            <div className="alert alert-danger col-xs-10 col-xs-offset-1">
              <h1>${lot.price}</h1>
            </div>
          </div>
          <div className="form-group row">
            <button className="btn btn-warning col-xs-10 col-xs-offset-1"><i className="fa fa-paypal"></i>Make a Payment</button>
          </div>
          <div className="form-group row">
            <button
              className="btn btn-success col-xs-10 col-xs-offset-1"
              onClick={this.onSubmit}>
              Make a Reservation
            </button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}
