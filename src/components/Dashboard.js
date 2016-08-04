import React, { Component } from 'react';
import LotDisplay from './LotDisplay';
import Welcome from './Welcome';
import LotActions from '../actions/LotActions';
import LotStore from '../stores/LotStore';
import AddReserveForm from './AddReserveForm';
import SelectLot from './SelectLot';
import Reserve from './Reserve';

let _getComponentState = () => {
  return {
    lots: LotStore.getAllLots(),
  }
}

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = _getComponentState();
    //
    // this.state = {
    //   lots: [],
    //   selectedLot: '',
    //   occupiedSpots: {},
    //   selectedSpot: '',
    //
    // }

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

  pickSpot(num) {
    console.log('picked: ', num);
    this.setState({spot: num});
  }
  pickLot(id){
    console.log('id: ', id);
    this.setState({lot: id});
  }
  render() {
    console.log(this.state);
    let options = this.state.lots.map((lot,index) => {
      return <option key={index} value={lot._id}>{lot.name}</option>
    });
    let lot = this.state.lots.find(lot => lot._id === this.state.lot);
    return (
      <div className="text-center">
        <Welcome />
        <SelectLot options={options} pickLot={this.pickLot} />

        <table className="table table-bordered table-inverse">
          {this.state.lot ? <LotDisplay pickSpot={this.pickSpot} lot={lot} /> : null }
        </table>

        {this.state.spot ? <Reserve spot={this.state.spot} lot={lot} /> : null }
        {/*{this.state.spot ? <AddReserveForm spot={this.state.spot} lot={lot} /> : null }*/}

      </div>
    )
  }
}
