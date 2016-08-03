import React, { Component } from 'react'

export default class Checkout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <form action="/api/payment" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          data-key="pk_test_ZqZQY5YVFSMrc9SQNVcAXXim"
          data-amount="999"
          data-name="Demo Site"
          data-description="Widget"
          data-image="/img/documentation/checkout/marketplace.png"
          data-locale="auto">
        </script>
      </form>
      </div>
    )
  }
}
