import React, { Component } from 'react';
import { Link } from 'react-router';
import LotDisplay from './LotDisplay';
import Welcome from './Welcome';
import LotActions from '../actions/LotActions';
import LotStore from '../stores/LotStore';
import AddReserveForm from './AddReserveForm';
import SelectLot from './SelectLot';
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
    this.pickLot = this.pickLot.bind(this);
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
  pickLot(id){
    console.log('id: ', id);
    this.setState({lot: id});
  }
  render() {
    console.log(this.state);
    let options = this.state.lots.map(lot => {
      return <option value={lot._id}>{lot.name}</option>
    });
    let lot = this.state.lots.find(lot => lot._id === this.state.lot);
    return (
      <div className="text-center">
        <Welcome />
        <SelectLot options={options} pickLot={this.pickLot} />

        <div>
          <table className="table table-bordered table-inverse">
            {this.state.lot ? <LotDisplay lot={lot} /> : null }
          </table>
        </div>

        <AddReserveForm pickSpot={this.pickSpot} />
        {/*<br />

        <Link to="reserve" type="button" className="btn btn-info col-xs-10 col-xs-offset-1">Reserve a Spot</Link>
        <br />
        <Link to="properties" type="button" className="btn btn-success col-xs-10 col-xs-offset-1">Check Avaliable Spot</Link>*/}
      </div>
    )
  }
}
