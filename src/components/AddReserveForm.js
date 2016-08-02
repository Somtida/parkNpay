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
  checkAvaliable(spot){
    console.log('checking avaliable spot');
    let avaliable = [true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true];
    if (avaliable[spot]){
      avaliable[spot] = !avaliable[spot];
      console.log('avaliable');
      return true;
    }else{
      console.log('not avaliable');
      return false;
    }
  }

  onSubmit(event) {
    event.preventDefault();
    // if (!this.state.name.length || !this.state.email.length || !this.state.phone.length || !this.state.lot.length || !this.state.spot.length || !this.state.duration.length) return;
    // if(this.state.spot)
    if (this.checkAvaliable(this.state.spot)){
      console.log('1. send to actions.addNewReserve in ReserveActions: ', this.state);
      // ReserveActions.addNewReserve(this.state);
      // this.setState({name: '', email: '', phone: '', lot: 'A', spot: '', duration: 'allDay'})
    }else{
      console.log('this spot is not avaliable');
    }
  }

  render() {
    return (
      <div className="panel panel-primary">
      <div className="panel-heading text-left">Form</div>
      <div className="panel-body">
        <form>
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
            <label htmlFor="customerLot" className="col-xs-2 col-form-label">Lot</label>
            <div className="col-xs-4">
              <select
                className="form-control"
                id="customerLot"
                value={this.state.lot}
                onChange={e => this.setState({lot: e.target.value})}>
                <option value="A">A</option>
                {/*<option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>*/}
              </select>
            </div>
            <label htmlFor="customerSpot" className="col-xs-2 col-form-label">Spot</label>
            <div className="col-xs-4">
              <input
                type="text"
                className="form-control"
                id="customerSpot"
                placeholder="11"
                value={this.state.spot}
                onChange={e => this.setState({spot: e.target.value})}
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
                <option value="1">An Hour</option>
                <option value="2">2 Hours</option>
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
          <div className="form-group row">
            <label htmlFor="customerPrice" className="col-xs-2 col-form-label">Price</label>
            <div className="col-xs-10 text-left">
              <h2>$20</h2>
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
