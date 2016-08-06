import React, { Component } from 'react'
import StripeActions from '../actions/StripeActions'
import StripeStore from '../stores/StripeStore'
export default class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerInfo: {
        name: '',
        email: '',
        phone: '',
        lot: '',
        spot: '',
        duration: 'allDay',
        price: '',
      },
      token: '',
      stripe: {},
    }
    this._onChange = this._onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    Stripe.setPublishableKey('pk_test_ZqZQY5YVFSMrc9SQNVcAXXim'); // set test public key
    StripeStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    StripeStore.stopListening(this._onChange)
  }
  handleSubmit(e) {
    e.preventDefault();
    let lot = this.props.lot // lot from Dashboard
    let spot = this.props.spot // spot from Dashboard
    let customerInfo = this.state.customerInfo; // customerInfo from Checkout

    Stripe.card.createToken(e.currentTarget, (status, token) => {

      let chargeDetails = token;
      chargeDetails.amount = lot.price;
      let payload = {
        lot: lot,
        spot: spot,
        customerInfo: customerInfo,
        chargeDetails: chargeDetails,

      };

      console.log('payload: ', payload);
      StripeActions.getStripeResponse(payload);
    });
  }
  _onChange() {
    console.log('7. setState :', this.state.token);
    this.setState({stripe: StripeStore.getStripeTrans(this.state.token)})
  }

  render() {

    console.log('price: ', this.props.lot.price);
    console.log('this.state: ', this.state);
    return (
      <div className="panel panel-primary">
        <div className="panel-heading text-left">Form</div>
        <div className="panel-body">
          <form method="post" onSubmit={ this.handleSubmit }>

            <div>
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
                  value={this.state.customerInfo.name}
                  onChange={e => this.setState({customerInfo: {name: e.target.value}})}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="customerEmail" className="col-xs-2 col-form-label">Email</label>
              <div className="col-xs-10">
                <input
                  type="text"
                  className="form-control"
                  id="customerEmail"
                  placeholder="bob@burger.com"
                  value={this.state.customerInfo.email}
                  onChange={e => this.setState({customerInfo: {email: e.target.value}})}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="customerDuration" className="col-xs-2 col-form-label">Duration</label>
              <div className="col-xs-10">
                <select
                  className="form-control"
                  id="customerDuration"
                  value={this.state.customerInfo.duration}
                  onChange={e => this.setState({customerInfo: {duration: e.target.value}})}>
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
                  value={this.state.customerInfo.phone}
                  onChange={e => this.setState({customerInfo: {phone: e.target.value}})}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">Card Number</label>
              <div className="col-xs-10">
                <input
                  type="text"
                  className="form-control"
                  data-stripe="number"
                  placeholder="4242424242424242"
                  maxLength={16}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">Expiration (MM/YYYY)</label>
              <div className="col-xs-10">
                <div className="col-xs-5">
                  <input className="form-control" type="text" data-stripe="exp_month" placeholder="12" maxLength={2} required />
                </div>
                <span className="col-xs-1"> / </span>
                <div className="col-xs-6">
                  <input className="form-control" type="text" data-stripe="exp_year" placeholder="2017" maxLength={4} required />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xs-2 col-form-label">CVC</label>
              <div className="col-xs-10">
                <input
                  type="text"
                  className="form-control"
                  data-stripe="cvc"
                  placeholder="xxx"
                  required
                />
              </div>
            </div>
            <div>
              <button className="btn btn-warning col-xs-10 col-xs-offset-1" value="Submit Payment" maxLength={3} ><h1>${this.props.lot.price}</h1><span>PAY NOW</span></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
