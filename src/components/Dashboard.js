import React, { Component } from 'react';
import LotDisplay from './LotDisplay';
import Welcome from './Welcome';
import LotActions from '../actions/LotActions';
import LotStore from '../stores/LotStore';
import SelectLot from './SelectLot';
import Checkout from './Checkout';
import StripeStore from '../stores/StripeStore';
import Success from './Success';


export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      lots: LotStore.getAllLots(),
      lot:   {},
      spot: '',
      stripe: null,

    }

    this.pickSpot = this.pickSpot.bind(this);
    this.pickLot = this.pickLot.bind(this);
    this.handelLotStoreChange = this.handelLotStoreChange.bind(this);
    this.handelStripStoreChange = this.handelStripStoreChange.bind(this);
  }
  handelLotStoreChange() {
    this.setState({lots: LotStore.getAllLots()})
  }
  handelStripStoreChange() {
    this.setState({stripe: StripeStore.getStripeTrans()})
  }
  componentDidMount() {
    LotActions.getAllLots();
    LotStore.startListening(this.handelLotStoreChange);
    StripeStore.startListening(this.handelStripStoreChange);

  }
  componentWillUnmount() {
    LotStore.stopListening(this._onChange);
  }


  pickSpot(num) {
    // console.log('picked: ', num);
    this.setState({spot: num});
  }
  pickLot(id){
    // console.log('id: ', id);
    this.setState({lot: id});
  }
  render() {
    let spot = this.state.spot;
    let stripe = this.state.stripe;
    let lot = this.state.lots.find(lot => lot._id === this.state.lot);
    let options = this.state.lots.map((lot,index) => {
      return <option key={index} value={lot._id}>{lot.name}</option>
    });

    if (stripe){
      return (
        <div className="text-center">
          <Success />
        </div>
      )
    }else{
      return (
        <div>
          <Welcome />
          <SelectLot options={options} pickLot={this.pickLot} />
          {lot ? <LotDisplay pickSpot={this.pickSpot} lot={lot} /> : null }
          {spot ? <Checkout spot={spot} lot={lot} /> : null }
        </div>
      )
    }
  }
}
