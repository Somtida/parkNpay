import React, { Component } from 'react';
import { Link } from 'react-router';

import LotDisplay from './LotDisplay';
import LotOption from './LotOption';

import LotActions from '../actions/LotActions';
import LotStore from '../stores/LotStore';
let _getComponentState = () => {
  return {
    lots: LotStore.getAllLots(),
  }
}

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = _getComponentState();

    this._onChange = this._onChange.bind(this);
    this.pickSpot = this.pickSpot.bind(this);
  }
  componentDidMount() {
    LotActions.getAllLots();
    LotStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    LotStore.stopListening(this._onChange);
  }
  _onChange() {
    this.setState(_getComponentState());
  }
  pickSpot(num){
    console.log('pick: ', num);
    this.setState({spot: num});
  }
  render() {
    console.log(this.state);
    let options = this.state.lots.map(lot => {
      return <option value={lot._id}>{lot.name}</option>
    });
    let columns = this.state.lots.filter(lot => {
      if(lot._id == this.state.lot){
        console.log('lot.totalSpots: ', lot.totalSpots);
        return lot.totalSpots;
      }
    });
    return (
      <div className="text-center">
        <h2>Welcome to</h2>
        <h1>Park &#38; Pay</h1>

        <h3><span className="label label-primary">Pick</span> | <span className="label label-warning">Park</span> | <span className="label label-danger">Pay</span></h3>
        <br />
        <div className="form-group row col-xs-8 col-xs-offset-2">
          <label htmlFor="customerLot" className="col-xs-2 col-form-label">Lot</label>
          <div className="col-xs-10">
            <select
              className="form-control"
              id="Lot"
              onChange={e => this.setState({lot: e.target.value})}>
              {options}
            </select>
          </div>
        </div>
        <br />
        <div>
          <table className="table table-bordered table-inverse">
            {this.state.lots.length ? <LotDisplay columns={columns} /> : <LotDisplay columns={0} />}
          </table>
        </div>

        {/*<br />
        <Link to="reserve" type="button" className="btn btn-info col-xs-10 col-xs-offset-1">Reserve a Spot</Link>
        <br />
        <Link to="properties" type="button" className="btn btn-success col-xs-10 col-xs-offset-1">Check Avaliable Spot</Link>*/}
      </div>
    )
  }
}
