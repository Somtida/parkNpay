import React, { Component } from 'react';

export default class SelectLot extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let {options, pickLot} = this.props;

    return (
      <div className="form-group row col-xs-8 col-xs-offset-2">
        <label htmlFor="customerLot" className="col-xs-2 col-form-label">Lot</label>
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
