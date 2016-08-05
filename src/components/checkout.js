import React, { Component } from 'react'
import ReserveActions from '../actions/ReserveActions'
export default class Checkout extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Stripe.setPublishableKey('pk_test_ZqZQY5YVFSMrc9SQNVcAXXim'); // set test public key
  }

  handleSubmit(e) {
    e.preventDefault();

    Stripe.card.createToken(e.currentTarget, (status, token) => {
      console.log( status, token );
      ReserveActions.getStripeResponse(token);
    });
  }
  render() {
    let formStyles = {
      margin: '30px auto',
      padding: '20px',
      border: '1px solid skyblue',
      borderRadius: '10px'
    }
    return (
      <div style={formStyles}>
        <form method="post" onSubmit={ this.handleSubmit }>
          {/*<label>
            <span>Card Number</span>
          </label>
          <input type="text" size="30" data-stripe="number" placeholder="number"/>
          <br />
          <input type="text" size="9" data-stripe="cvc" placeholder="cvc" />
          <input type="text" size="9" data-stripe="exp-month" placeholder="exp-month" />
          <input type="text" size="9" data-stripe="exp-year" placeholder="exp-year" />
          <br />
          <button className="stripe-button" type="submit">Pay</button>

        */}
        <div className="form-group row">
          <label className="col-xs-3 text-right">Card Number</label>
          <div>
            <input className="col-xs-9 text-left" type="text" size="20" data-stripe="number" placeholder="number" maxLength={16} />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-xs-3 text-right">Expiration (MM/YY)</label>
          <div>
            <input className="col-xs-4" type="text" size="2" data-stripe="exp_month" placeholder="exp-month" maxLength={2} />
            <span className="col-xs-1"> / </span>
            <input className="col-xs-4" type="text" size="2" data-stripe="exp_year" placeholder="exp-year" maxLength={4} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-3 text-right">CVC</label>
          <div>
            <input className="col-xs-9 text-left" type="text" data-stripe="cvc" placeholder="cvc" />
          </div>
        </div>
        <div>
          <input type="submit" className="btn btn-warning submit" value="Submit Payment" maxLength={3} />
        </div>
        </form>
      </div>
    )
  }
}
