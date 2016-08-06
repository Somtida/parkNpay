import React, { Component } from 'react';

export default class SelectLot extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let {options, pickLot} = this.props;
    let styles = {
      color: '#fff',
      fontSize: '25px',
    }
    return (
      <div className="form-group row col-xs-8 col-xs-offset-2" style={styles}>
        <label htmlFor="customerLot" className="col-xs-2 col-form-label text-right">Lot</label>
        <div className="col-xs-10">
          <select
            className="form-control"
            id="Lot"
            onChange={e => pickLot(e.target.value)}>
            {options}

          </select>
        </div>
      </div>
    )
  }
}
