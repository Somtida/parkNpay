import React, { Component } from 'react'
import ReserveActions from '../actions/ReserveActions'
// import { Link } from 'react-router'
import Checkout from './Checkout'
export default class AddReserveForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      lot: '',
      spot: '',
      duration: 'allDay',
      price: '',
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount() {
  //   this.setState({
  //     lot: this.props.lot._id,
  //     spot: this.props.spot,
  //     price: this.props.lot.price,
  //   });
  // }
  onSubmit(event) {
    event.preventDefault();
    // if (!this.state.name.length || !this.state.email.length || !this.state.phone.length || !this.state.lot.length || !this.state.spot.length || !this.state.duration.length) return;
      this.state.spot = this.props.spot;
      this.state.lot = this.props.lot._id;
      this.state.price = this.props.lot.price;

      console.log('this.state in sumbit: ', this.state);
      console.log('1. send to actions.addNewReserve in ReserveActions: ', this.state);
      ReserveActions.addNewReserve(this.state);
      this.setState({name: '', email: '', phone: '', lot: '', spot: '', duration: 'allDay'})
  }

  render() {
    console.log('props spot: ', this.props.spot);
    console.log('props lot: ', this.props.lot);
    console.log('this.state: ', this.state);
    return (
      <div className="panel panel-primary">
      <div className="panel-heading text-left">Form</div>
      <div className="panel-body">
        <form>

          <div >
            <div className="alert alert-info">
              <h1>{this.props.spot <= this.props.lot.totalSpots ? this.props.lot.name+this.props.spot : 'please pick a spot'}</h1>
            </div>
          </div>

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

          <Checkout />
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
